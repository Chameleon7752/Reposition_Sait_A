function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

jQuery(document).ready(function () {

    jQuery(document).on('click', '.button-send', function (e){
        if(jQuery(this).hasClass('disabled')){
            e.preventDefault();
        }else jQuery(this).addClass('disabled');
    });
    jQuery(document).on('click', '.btnRegEvent', function (e){
        let id = jQuery(this).attr('data-hystmodal');
        jQuery(id+' .webinar_title-form').text(jQuery(this).closest('.events_table-tr').find('.col1').text());
        jQuery(id+' [name="web_name"]').val(jQuery(this).closest('.events_table-tr').find('.col1').text());
        jQuery(id+' [name="web_date"]').val(jQuery(this).closest('.events_table-tr').find('.col2').text());
        jQuery(id+' [name="web_speaker"]').val(jQuery(this).closest('.events_table-tr').find('.info-speaker_title').text());
        jQuery(id+' [name="web_lang"]').val(jQuery(this).closest('.events_table-tr').find('.col5_lang').text());
    });
    jQuery(document).on('click', '.header-btn-lang', function (e){
        e.preventDefault();
        jQuery('.other-langs-tabs').toggleClass('hidden');
    });
    jQuery(document).mouseup( function(e){
        var div = jQuery( ".wrapper-langs-n" );
        if ( !div.is(e.target)
            && div.has(e.target).length === 0 ) {
            jQuery('.other-langs-tabs').addClass('hidden');
        }
    });
    jQuery(document).on('click', '.cmp-tabs__tab', function (){
        if(!jQuery(this).hasClass('cmp-tabs__tab--active')){
            jQuery('.cmp-tabs__tab').removeClass('cmp-tabs__tab--active');
            jQuery(this).addClass('cmp-tabs__tab--active');
            jQuery('.tab-content-l').removeClass('cmp-tabs__tab--active');
            jQuery('.tab-content-l[data-tab="'+jQuery(this).attr('data-tab')+'"]').addClass('cmp-tabs__tab--active');
        }
    });

    /*document.addEventListener('wpcf7mailsent', function (event) {
        var inputs = event.detail.inputs;
        var email_buf = '';
        for (var i = 0; i < inputs.length; i++) {
            if ('email' == inputs[i].name) {
                email_buf = inputs[i].value;
                break;
            }
        }
        if (email_buf != '') {
            jQuery.ajax({
                type: "POST",
                url: '/wp-admin/admin-ajax.php?action=sendZapier',
                cache: false,
                data: {
                    "email": email_buf,
                    "dateurl": window.location.href
                },
                dataType: 'json',
                success: function (msg) {
                }
            });
        }
        if (jQuery('.container-columns__content form>.wpcf7-response-output').length > 0) {
            jQuery("html, body").animate({
                scrollTop: jQuery(".container-columns__content form>.wpcf7-response-output").offset().top - 150
            }, {
                duration: 370,
                easing: "linear"
            });
        }
        if (window.location.href.indexOf('/case-study') !== -1) {
            jQuery('.back-ground .wpcf7-form.sent').closest('.back-ground').find('.more_detail').addClass('biggest-symb');
            jQuery('.back-ground .wpcf7-form.sent .text-i').css('border', '1px solid #00E725');
            jQuery('.back-ground .wpcf7-form.sent .error-mes-after').remove();
            jQuery('.back-ground .wpcf7-form.sent .text-i').before('<div class="success-mes-after"><svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9082 0.783203L5.1875 10.5039L1.0918 6.4082L0.283203 7.2168L4.7832 11.7168L5.1875 12.1035L5.5918 11.7168L15.7168 1.5918L14.9082 0.783203Z" fill="#6DD230"/></svg></div>');
        }
        var send_pipe = false;
        if ('1319' == event.detail.contactFormId || '1457' == event.detail.contactFormId || '1410' == event.detail.contactFormId ||
            '2606' == event.detail.contactFormId || '2617' == event.detail.contactFormId || '2608' == event.detail.contactFormId ||
            '2604' == event.detail.contactFormId || '2620' == event.detail.contactFormId || '2614' == event.detail.contactFormId ||
            '2625' == event.detail.contactFormId) {
            send_pipe = true;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'FormSucessTrial',
            });
            fbq('track', 'LEAD');
        }
        if ('1303' == event.detail.contactFormId || '2509' == event.detail.contactFormId || '1439' == event.detail.contactFormId ||
            '2495' == event.detail.contactFormId || '2503' == event.detail.contactFormId || '2497' == event.detail.contactFormId ||
            '2492' == event.detail.contactFormId || '2506' == event.detail.contactFormId || '2500' == event.detail.contactFormId) {
            send_pipe = true;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'FormSucessSales',
            });
            fbq('track', 'LEAD');
        }
        if ('1300' == event.detail.contactFormId || '2488' == event.detail.contactFormId || '1440' == event.detail.contactFormId ||
            '2473' == event.detail.contactFormId || '2482' == event.detail.contactFormId || '2476' == event.detail.contactFormId ||
            '2458' == event.detail.contactFormId || '2485' == event.detail.contactFormId || '2479' == event.detail.contactFormId) {
            send_pipe = true;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'FormSucessSupport',
            });
            fbq('track', 'LEAD');
        }
        if ('1306' == event.detail.contactFormId || '2798' == event.detail.contactFormId || '1455' == event.detail.contactFormId ||
            '2779' == event.detail.contactFormId || '2791' == event.detail.contactFormId || '2781' == event.detail.contactFormId ||
            '2775' == event.detail.contactFormId || '2794' == event.detail.contactFormId || '2685' == event.detail.contactFormId ||
            '2785' == event.detail.contactFormId) {
            send_pipe = true;
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'FormSucessPartnership',
            });
            fbq('track', 'LEAD');
        }
        if (send_pipe) {
            jQuery.ajax({
                type: "POST",
                url: '/wp-admin/admin-ajax.php?action=sendPipe',
                cache: false,
                data: {
                    "form_id": event.detail.contactFormId,
                    "inputs": event.detail.inputs,
                    "utm_source": jQuery('[name="utm_source"]').val(),
                    "utm_medium": jQuery('[name="utm_medium"]').val(),
                    "utm_campaign": jQuery('[name="utm_campaign"]').val(),
                    "utm_term": jQuery('[name="utm_term"]').val(),
                    "utm_content": jQuery('[name="utm_content"]').val(),
                    "referrer": jQuery('[name="referrer"]').val(),
                    "first_page": jQuery('[name="first_page"]').val(),
                    "last_page": jQuery('[name="last_page"]').val(),
                    "uri": jQuery('[name="uri"]').val()
                },
                dataType: 'json',
                success: function (msg) {
                }
            });
        }
    }, false);*/
    document.addEventListener('wpcf7invalid', function (event) {
        if (window.location.href.indexOf('/case-study') !== -1) {
            jQuery('.back-ground .wpcf7-form.invalid .text-i').each(function (i, elem) {
                jQuery(elem).closest('.wpcf7-form-control-wrap').find('.success-mes-after').remove();
                jQuery(elem).before('<div class="error-mes-after"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 0.485657C5.78125 0.485657 4.64453 0.796204 3.58984 1.4173C2.57031 2.00323 1.76758 2.80597 1.18164 3.8255C0.560547 4.88019 0.25 6.01691 0.25 7.23566C0.25 8.45441 0.560547 9.59113 1.18164 10.6458C1.76758 11.6653 2.57031 12.4739 3.58984 13.0716C4.64453 13.681 5.78125 13.9857 7 13.9857C8.21875 13.9857 9.35547 13.681 10.4102 13.0716C11.4297 12.4739 12.2383 11.6653 12.8359 10.6458C13.4453 9.59113 13.75 8.45441 13.75 7.23566C13.75 6.01691 13.4453 4.88019 12.8359 3.8255C12.2383 2.80597 11.4297 2.00323 10.4102 1.4173C9.35547 0.796204 8.21875 0.485657 7 0.485657ZM7 1.61066C8.01953 1.61066 8.96875 1.86847 9.84766 2.38409C10.6914 2.87628 11.3594 3.54425 11.8516 4.388C12.3672 5.26691 12.625 6.21613 12.625 7.23566C12.625 8.25519 12.3672 9.20441 11.8516 10.0833C11.3594 10.9271 10.6914 11.595 9.84766 12.0872C8.96875 12.6028 8.01953 12.8607 7 12.8607C5.98047 12.8607 5.03125 12.6028 4.15234 12.0872C3.30859 11.595 2.64062 10.9271 2.14844 10.0833C1.63281 9.20441 1.375 8.25519 1.375 7.23566C1.375 6.21613 1.63281 5.26691 2.14844 4.388C2.64062 3.54425 3.30859 2.87628 4.15234 2.38409C5.03125 1.86847 5.98047 1.61066 7 1.61066ZM6.4375 3.86066V8.36066H7.5625V3.86066H6.4375ZM6.4375 9.48566V10.6107H7.5625V9.48566H6.4375Z" fill="#E70001"/></svg></div>');
            });
        }
        if (jQuery('.container-columns__content form>.wpcf7-response-output').length > 0) {
            jQuery("html, body").animate({
                scrollTop: jQuery(".container-columns__content form>.wpcf7-response-output").offset().top - 150
            }, {
                duration: 370,
                easing: "linear"
            });
        }
    });

    setInterval(function () {
        if (jQuery('.hero-section__promo span').length > 1) {
            var el = jQuery('.hero-section__promo span.active');
            jQuery('.hero-section__promo span').removeClass('active');
            if (jQuery(el).next().length) {
                jQuery(el).next().addClass('active');
            } else jQuery('.hero-section__promo span').first().addClass('active');
        }
    }, 2500);
    jQuery(document).on('click', '.wpcf7-submit', function (e) {
        let mas_v = [];
        let id = jQuery(this).closest('div.wpcf7').attr('id');
        jQuery('#'+id+' form input').each(function (i, elem) {
            let v = jQuery(elem).val();
            if(jQuery(elem).attr('type') == 'checkbox'){
                if(jQuery(elem).prop('checked')){
                    v = 1;
                }
            }
            mas_v.push({name: jQuery(elem).attr('name'), val: v, type: jQuery(elem).attr('type')});
        });
        jQuery('#'+id+' form textarea').each(function (i, elem) {
            let v = jQuery(elem).val();
            mas_v.push({name: jQuery(elem).attr('name'), val: v, type: 'textarea'});
        });
        jQuery.ajax({
            type: "POST",
            url: '/wp-admin/admin-ajax.php?action=saveClick',
            cache: false,
            data: {
                "mas_v": mas_v,
                "hr": window.location.href,
                "language_code": jQuery('html').attr('lang'),
            },
            dataType: 'json',
            success: function (msg) {
            }
        });
        console.log();
    });
    jQuery(document).on('click', '.is_calendly', function (e) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push ({
            'event': 'FormSucessCalendly',
        });
        fbq('track', 'LEAD');
    });
    jQuery(document).on('click', '.allow_cookie', function (e) {
        e.preventDefault();
        setCookie('accept_cookie', true, 365);
        jQuery('.overlay-dark').remove();
        jQuery('.cookie-plashka').remove();
    });
    jQuery(document).on('click', '.reject-cookie', function (e) {
        e.preventDefault();
        jQuery('.overlay-dark').remove();
        jQuery('.cookie-plashka').remove();
    });
    jQuery(document).on('click', '.anim_scroll a, .norm-t-cl a', function (e) {
        e.preventDefault();
        let href = jQuery(this).attr("href");
        jQuery("html, body").animate({
            scrollTop: jQuery(href).offset().top - 80
        }, {
            duration: 370,
            easing: "linear"
        });
    });
    jQuery(document).on('click', '.plashka-wrapper a', function (e) {
        if (jQuery(this).hasClass('close-plashka')) {
            e.preventDefault();
        }
        let ids_plashka = getCookie('ids_plashka');
        if (ids_plashka == '') {
            ids_plashka = [];
        } else ids_plashka = ids_plashka.split('|');
        ids_plashka.push(jQuery(this).closest('.plashka-wrapper').find('.close-plashka').attr('data-plashkaid'));
        ids_plashka = ids_plashka.join('|');
        setCookie('ids_plashka', ids_plashka, 365);
        jQuery(this).closest('.plashka-wrapper').remove();
    });
    jQuery(document).on('click', '.btns-slider .pag-slide-cbtn', function (e) {
        e.preventDefault();
        if (jQuery(this).hasClass('prev')) {
            jQuery(this).closest('.wrap-slider-btn').find('.slick-prev.slick-arrow').trigger('click');
        } else {
            jQuery(this).closest('.wrap-slider-btn').find('.slick-next.slick-arrow').trigger('click');
        }
    });
    jQuery(document).on('click', '.nav__item', function (e) {
        if (window.innerWidth < 1100) {
            jQuery(this).toggleClass('is-open');
        }
    });
    jQuery(document).on('click', '.blogrial-preview:not(.hovered)', function (e) {
        window.location.href = jQuery(this).find('.more_detail').attr('href');
    });
    jQuery(document).on('click', '.accordion-wrap_header', function (e) {
        jQuery(this).toggleClass('active');
        jQuery(this).closest('.accordion-wrap').find('.accordion-wrap_content').toggleClass('norm-t-cl');
    });
    jQuery(document).on('click', '.price-section__tab', function (e) {
        if (!jQuery(this).hasClass('is-active')) {
            jQuery('.price-section__tab').removeClass('is-active');
            jQuery(this).addClass('is-active');
            jQuery('.price-section__content').removeClass('is-active');
            jQuery('.price-section__content[data-tab="' + jQuery(this).attr('data-tab') + '"]').addClass('is-active');
        }
    });
    jQuery(document).on('click', '.js-tab-toggle', function (e) {
        if (!jQuery(this).hasClass('is-active')) {
            jQuery(this).closest('.js-tabs-list').find('.js-tab-toggle').removeClass('is-active');
            jQuery(this).addClass('is-active');
            jQuery(this).closest('.responsive-tabs').find('.responsive-tabs__content').removeClass('is-active');
            jQuery(this).closest('.responsive-tabs').find('.responsive-tabs__content[data-content="' + jQuery(this).attr('rel') + '"]').addClass('is-active');
        }
    });
    function getEVents(cur, t, lang, tip){
        jQuery.ajax({
            type: "POST",
            url: '/wp-admin/admin-ajax.php?action=getEvents',
            cache: false,
            data: {
                "cur": cur,
                "t": t,
                "tip": tip,
                "lang_webinar": lang
            },
            dataType: 'json',
            success: function (msg) {
                if(tip == 'append'){
                    if(t == 'future'){
                        jQuery('.events_table_wrapper.future-content .events_table-content-tr').append(msg.html);
                    }else{
                        jQuery('.events_table_wrapper.past-content .events_table-content-tr').append(msg.html);
                    }
                }else if(tip == 'replace'){
                    if(t == 'future'){
                        jQuery('.events_table_wrapper.future-content .events_table-content-tr').html(msg.html);
                    }else{
                        jQuery('.events_table_wrapper.past-content .events_table-content-tr').html(msg.html);
                    }
                }
                jQuery('.load-more-events[data-type="'+t+'"]').attr('data-cur',  msg.cur);
                if(msg.cnt < 7){
                    jQuery('.load-more-events[data-type="'+t+'"]').parent().addClass('hidden');
                }else jQuery('.load-more-events[data-type="'+t+'"]').parent().removeClass('hidden');
            }
        });
    }
    jQuery(document).on('click', '.langs-cs', function (e) {
        e.preventDefault();
        if(!jQuery(this).hasClass('active')){
            let t = jQuery(this).closest('.langs-block').hasClass('future') ? 'future' : 'past';
            jQuery('.langs-block.'+t+' .langs-cs').removeClass('active');
            jQuery(this).addClass('active');
            jQuery('.load-more-events[data-type="'+t+'"]').attr('data-cur', 6);
            let cur = 6;
            let lang = jQuery(this).text();
            getEVents(0, t, lang, 'replace');
        }
    });
    jQuery(document).on('click', '.load-more-events', function (e) {
        e.preventDefault();
        let cur = jQuery(this).attr('data-cur');
        let t = jQuery(this).attr('data-type');
        let lang = '';
        if(jQuery('.langs-block.'+t+' .langs-cs.active').length > 0){
            lang = jQuery('.langs-block.'+t+' .langs-cs.active').text();
        }
        getEVents(cur, t, lang, 'append');
    });
    jQuery(document).on('click', '.see_more_block', function (e) {
        e.preventDefault();
        var el = jQuery(this);
        jQuery.ajax({
            type: "POST",
            url: '/wp-admin/admin-ajax.php?action=getCaseStudy',
            cache: false,
            data: {
                "cnt": jQuery(el).attr('data-cnt'),
                "maxblog": jQuery(el).attr('data-maxblog'),
                "dterm": jQuery('.tab-item.active').attr('data-term'),
                "dtype": jQuery(el).attr('data-type')
            },
            dataType: 'json',
            success: function (msg) {
                jQuery(el).attr('data-maxblog', msg.maxblog);
                if (msg.cnt < 4) {
                    jQuery('.see_more_wrap').addClass('hidden');
                } else {
                    jQuery(el).attr('data-cnt', +jQuery(el).attr('data-cnt') + 3);
                }
                if (msg.cnt > 0) {
                    jQuery('.wrap-preview-items').append(msg.html);
                }
            }
        });
    });
    jQuery(document).on('click', '.opportunities-slider__li', function (e) {
        jQuery('.opportunities-slider__li[data-tabsid="' + jQuery(this).attr('data-tabsid') + '"]').removeClass('slick-active');
        jQuery(this).addClass('slick-active');
        jQuery('.slider-tabs-imgs[data-imgn="' + jQuery(this).attr('data-tabsid') + '"]').slick('slickGoTo', jQuery(this).attr('data-sliden'));
    });
    jQuery(document).on('click', '.opportunities-tabs__button', function (e) {
        if (!jQuery(this).hasClass('is-active')) {
            jQuery('.opportunities-tabs__button').removeClass('is-active');
            jQuery('.opportunities-tabs__content').removeClass('is-active');
            jQuery(this).addClass('is-active');
            jQuery('.opportunities-tabs__content[data-tabi="' + jQuery(this).attr('data-tabi') + '"]').addClass('is-active');
            if (jQuery(this).hasClass('nclicked')) {
                jQuery('.slider-tabs-imgs[data-imgn="' + jQuery(this).attr('data-tabi') + '"]').slick('refresh');
                jQuery(this).removeClass('nclicked');
                /*setTimeout(() => {
                    jQuery('.opportunities-slider__li[data-id="'+jQuery(this).attr('data-tabi')+'_0"]').trigger('click');


                }, "200")*/
            }
        }
    });
    jQuery(document).on('click', '.tab-item', function (e) {
        e.preventDefault();
        if (!jQuery(this).hasClass('active')) {
            jQuery('.tab-item').removeClass('active');
            jQuery(this).addClass('active');
            let term = jQuery(this).attr('data-term');
            jQuery.ajax({
                type: "POST",
                url: '/wp-admin/admin-ajax.php?action=getFilterPosts',
                cache: false,
                data: {
                    "dterm": jQuery('.tabs-section .tab-item.active').attr('data-term'),
                    "dtype": jQuery('.see_more_block').attr('data-type')
                },
                dataType: 'json',
                success: function (msg) {
                    jQuery('.posts-filter-content').html(msg.html);
                    jQuery('.see_more_block').attr('data-cnt', 7);
                    if (msg.cnt < 8) {
                        jQuery('.see_more_wrap').addClass('hidden');
                    } else jQuery('.see_more_wrap').removeClass('hidden');
                }
            });
        }
        /*if(term == 'all'){
            jQuery('.item-preview.blogrial-preview').removeClass('hidden');
        }else{
            jQuery('.item-preview.blogrial-preview').addClass('hidden');
            jQuery('.item-preview.blogrial-preview.'+term).removeClass('hidden');
        }*/
    });
    jQuery(document).on('click', '.play-btn-popup', function (e) {
        e.preventDefault();
        let h = jQuery('.modal-block').height();
        jQuery('body').append('<div class="overlay"></div>');
        jQuery('.modal-block[data-modal="mvideo"] .modal-body').html('<iframe style="width: 100%;height: 100%" src="https://www.youtube.com/embed/' + getYotubeId(jQuery(this).attr('data-videolink')) + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        jQuery('.modal-block[data-modal="mvideo"] iframe').css('height', h + 'px');
        jQuery('.modal-block[data-modal="mvideo"]').removeClass('hidden');
    });
    jQuery(".js-reviews-slider").slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev'><svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 0L0 8L8 16V0Z\" fill=\"#F7F7F7\"/></svg>\n</button>",
        nextArrow: "<button type='button' class='slick-next'><svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0L8 8L0 16V0Z\" fill=\"#F7F7F7\"/></svg></button>",
    });
    jQuery(".slider-one-mob").slick({
        infinite: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: "<button type='button' class='slick-prev'><svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 0L0 8L8 16V0Z\" fill=\"#F7F7F7\"/></svg>\n</button>",
        nextArrow: "<button type='button' class='slick-next'><svg width=\"8\" height=\"16\" viewBox=\"0 0 8 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 0L8 8L0 16V0Z\" fill=\"#F7F7F7\"/></svg></button>",
        responsive: [
            {
                breakpoint: 1281,
                settings: "unslick"
            }
        ]
    });

    jQuery(".tournament-reviews_items_slider_wrap").slick({
        infinite: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<button type='button' class='slick-prev'><svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next'><svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg></button>",
    });
    jQuery('.slider-tabs-imgs').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        jQuery('.opportunities-slider__li[data-tabsid="' + jQuery(this).closest('.opportunities-tabs__content').attr('data-tabi') + '"]').removeClass('slick-active');
        jQuery(jQuery(this).closest('.opportunities-tabs__content').find('.nsd li')[nextSlide]).addClass('slick-active');
    });
    jQuery(".slider-tabs-imgs").slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-prev'><svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg></button>",
        nextArrow: "<button type='button' class='slick-next'><svg class='icon slider-arrow'><use xlink:href=\"/img/sprite.svg#icon-slider-arrow\"></use></svg></button>",
    });
    jQuery(".inner-slider.blog-slider").slick({
        infinite: !0,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    jQuery(document).on('click', '.play-btn-real', function (e) {
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        e.preventDefault();
        let h = jQuery(this).closest('.left-part').height();
        var el = jQuery(this).closest('.left-part');
        jQuery(this).closest('.left-part').html('<iframe style="width: 100%" height="' + h + '" src="' + jQuery(this).attr('data-videolink') + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
        setTimeout(function () {
            jQuery(el).find('iframe')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }, 1500);
    });

    jQuery('.gc-review-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 90000,
    });


    function shiftBtnPlashka() {
        let right = +jQuery('.header-lang').width();
        right += (jQuery('.header-sect').width() - jQuery('.header-sect a').width() + 10) / 2;
        if (window.innerWidth > 1920) {
            right += (window.innerWidth - 1920) / 2;
        }
        jQuery('.btn-plashka').css('width', +jQuery('.header-sect a').width() + 20 + 'px').css('right', right + 'px');
    }

    shiftBtnPlashka();
    window.onresize = shiftBtnPlashka;
    dsSteps();
    function dsSteps() {
        jQuery('.block-ds-list-item').each(function(i) {
            var blockContent = jQuery(this).find('p').text();
            var wordCount = blockContent.trim().split(/\s+/).length;
            var timeoutTime = wordCount * 100; // Умножаем на 100 для перевода в миллисекунды
            // console.log(timeoutTime);
            if (jQuery(this).hasClass('current')) {
                jQuery(this).animate('transform:ease-in-out 0.5s', function() {
                    setTimeout(function() {
                        let nextItem = jQuery('.block-ds-list-item')[i + 1];
                        let curItem = jQuery('.block-ds-list-item')[i];
                        let prevItem = jQuery('.block-ds-list-item')[i - 1];
                        jQuery(curItem).removeClass('current');
                        jQuery('.block-ds-list-item').removeClass('opacity-1');
                        jQuery('.block-ds-list-item').removeClass('opacity-05');
                        if (nextItem !== undefined) {
                            jQuery(nextItem).addClass('current');
                            jQuery(curItem).addClass('opacity-1');
                            jQuery(prevItem).addClass('opacity-05');
                        } else {
                            let nextItem = jQuery('.block-ds-list-item')[0];
                            jQuery(nextItem).addClass('current');
                            jQuery(curItem).addClass('opacity-1');
                            jQuery(prevItem).addClass('opacity-05');
                        }
                        dsSteps();
                    }, timeoutTime);
                });
            }
        });
    }

    jQuery('.compare_block-accordeon').each(function() {
        var wrap = jQuery(this);
        var childElements = wrap.children().not('.compare_block-accordeon-title');
        var totalHeight = 0;
        if(jQuery(window).width() <= 767){
            var totalHeight = 48;
        }
        if(childElements.hasClass('compare_block-bottom-text')){
            var totalHeight = 88;
        }
        childElements.each(function() {
            if(!wrap.hasClass('hide')) {
                var childHeight = jQuery(this).height();
                totalHeight += childHeight + 44;
            }else{
                totalHeight = 44;
            }
        });

        wrap.css('max-height', totalHeight);
    });
    jQuery('.compare_block-accordeon-title').on('click', function(){
        var wrap = jQuery(this).closest('.compare_block-accordeon');
        var childElements = wrap.children().not('.compare_block-accordeon-title');
        var totalHeight = 0;
        if(jQuery(window).width() <= 767){
            var totalHeight = 48;
        }
        if(childElements.hasClass('compare_block-bottom-text')){
            var totalHeight = 88;
        }
        wrap.toggleClass('hide');
        if(!wrap.hasClass('hide')){
            childElements.each(function() {
                var childHeight = jQuery(this).height();
                totalHeight += childHeight + 44;
            });
            wrap.animate({'max-height': totalHeight}, 300);
            childElements.animate({'opacity': 1}, 300);
            jQuery(this).contents().last().replaceWith('Show less');
            console.log($(this).data('less'));
        } else {
            wrap.animate({'max-height': 44}, 300);
            childElements.animate({'opacity': 0}, 300);
            jQuery(this).contents().last().replaceWith('Show more');
            console.log($(this).data('more'));
        }
    });


    var sliderNav = jQuery('.slider_list-nav');
    var sliderMain = jQuery('.slider_list-main');
    sliderNav.slick({
        arrows: false,
        dots: false,
        vertical: true,
        slidesToShow: 'all',
        asNavFor: '.slider_list-main',
        swipe: false,
        autoplay: true,
        autoplaySpeed: 20000
    });
    sliderMain.slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        asNavFor: '.slider_list-nav',
        // variableWidth: true,
        prevArrow: '<div class="slick-prev">\n' +
            '                            <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4.19629L8 12.1963L16 20.1963V4.19629Z" fill="#171A1E"/>\n' +
            '                            </svg>\n' +
            '                        </div>',
        nextArrow: '<div class="slick-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.14209L18 13.0336L10 20.9251V5.14209Z" fill="#171A1E"/>\n' +
            '</svg>\n</div>',
        autoplay: true,
        autoplaySpeed: 20000
    });
    jQuery(document).keydown(function(e) {
        var sliderNavVisible = sliderNav.is(':visible');
        var sliderMainVisible = sliderMain.is(':visible');

        if (sliderNavVisible && sliderMainVisible) {
            //e.preventDefault();
            if (e.key === 'ArrowLeft') {
                sliderMain.slick('slickPrev');
            } else if (e.key === 'ArrowRight') {
                sliderMain.slick('slickNext');
            }
        }
    });
    sliderNav.find('.slick-slide').click(function() {
        var index = jQuery(this).data('slick-index');
        sliderMain.slick('slickGoTo', index);
        sliderNav.find('.slick-slide').removeClass('slick-current');
        jQuery(this).addClass('slick-current');
    });

    jQuery(window).scroll(function() {
        var block = jQuery('.compare_block-list-logos');
        if(block.length > 0) {
            var parentBlock = block.parent(); // Получаем родительский блок

            var windowTop = jQuery(window).scrollTop();
            var blockTop = block.offset().top;
            var blockHeight = block.outerHeight();
            var parentTop = parentBlock.offset().top;
            var parentHeight = parentBlock.outerHeight();

            if (windowTop > parentTop -71 && windowTop + blockHeight < parentTop + parentHeight - 71) {
                block.addClass('fixed');
                jQuery('.compare_block-list').css('padding-top', '66px');
                block.css('width', parentBlock.outerWidth()); // Задаем ширину фиксированному блоку
            } else {
                block.removeClass('fixed');
                jQuery('.compare_block-list').css('padding-top', '0');
                block.css('width', 'auto'); // Сбрасываем заданную ширину
            }
        }
    });
    jQuery(window).scroll(function() {
        jQuery('.compare_block-list-title-fixed').each(function(){
            var block = jQuery(this).find('.compare_block-list-title');
            if(block.length > 0) {
                var parentBlock = block.parent(); // Получаем родительский блок
                var windowTop = jQuery(window).scrollTop();
                var blockTop = block.offset().top;
                var blockHeight = block.outerHeight();
                var parentTop = parentBlock.offset().top;
                var parentHeight = parentBlock.outerHeight();
                console.log(windowTop > parentTop);
                if (windowTop > parentTop - 137 && windowTop + blockHeight < parentTop + parentHeight - 137) {
                    block.addClass('fixed');
                    jQuery(this).css('padding-top', blockHeight);
                    block.css('width', parentBlock.outerWidth()); // Задаем ширину фиксированному блоку
                } else {
                    block.removeClass('fixed');
                    jQuery(this).css('padding-top', '0');
                    block.css('width', 'auto'); // Сбрасываем заданную ширину
                }
            }
        });
    });

    if(jQuery(window).width() >= 1280) {
        jQuery(window).scroll(function () {
            var parentBlock = jQuery('.compare_block-content-left');
            if (parentBlock.length > 0) {
                var stickyBlock = jQuery('.compare_block-content-left-stiсky');
                var parentTop = parentBlock.offset().top;
                var parentHeight = parentBlock.outerHeight();
                var windowScrollTop = jQuery(window).scrollTop();
                var windowHeight = jQuery(window).height();
                var stickyBlockHeight = stickyBlock.outerHeight();
                var top = 111;
                if (jQuery(window).width() <= 767) {
                    var top = 48;
                }
                if (windowScrollTop > parentTop - 70) {
                    stickyBlock.css({
                        'position': 'fixed',
                        'top': top,
                        'width': parentBlock.width() + 'px'
                    });

                    if (windowScrollTop + stickyBlockHeight > parentTop + parentHeight - 100) {
                        var topOffset = parentHeight - stickyBlockHeight;
                        stickyBlock.css({
                            'top': topOffset + 'px'
                        });
                    }
                } else {
                    stickyBlock.css({
                        'position': 'static',
                        'width': 'auto'
                    });
                }
            }
        });
    }

    jQuery('.integrations-faq-list-item-top').on('click', function(){
        jQuery(this).toggleClass('active');
        jQuery(this).closest('.integrations-faq-list-item').siblings().find('.integrations-faq-list-item-top').removeClass('active');
    });
    jQuery(".integrations-banner-anchor-item").on("click", function(event) {
        event.preventDefault();
        var target = jQuery(this).attr("href");
        jQuery("html, body").animate({
            scrollTop: jQuery(target).offset().top
        }, 500);
    });
});
