/* ---------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
---------------------------------------- MAIN (Custom) Javascript Starts HERE ----------------------------------------
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------ */
$(document).ready(() => {

        // Custom function which toggles between sticky class (is-sticky)
        var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
            var stickyHeight = sticky.outerHeight();
            var stickyTop = stickyWrapper.offset().top;

            if (scrollElement.scrollTop() >= stickyTop) {
                stickyWrapper.height(stickyHeight);
                sticky.addClass('is-sticky');
            } else {
                sticky.removeClass('is-sticky');
                stickyWrapper.height('auto');
            }
        }

        ;

        // Find all data-toggle="sticky-onscroll" elements
        $('[data-toggle="sticky-onscroll"]').each(function () {
                var sticky = $(this);
                var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
                sticky.before(stickyWrapper);
                sticky.addClass('sticky');

                // Scroll & resize events
                $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                        stickyToggle(sticky, stickyWrapper, $(this));
                    }

                );

                // On page load
                stickyToggle(sticky, stickyWrapper, $(window));
            }

        );

        // Applying Active Class On Nav Link when CLicked
        //
        // $('.navbar .nav-link').on('click', function() {
        // $('.navbar')
        // .find('.active')
        // .removeClass('active');
        // $(this)
        // .parent('.nav-item')
        // .addClass('active');

        // if (this.hash !== '') {
        // event.preventDefault();
        // var hash = this.hash;
        // $('html, body').animate(
        // {
        // scrollTop: $(hash).offset().top - 70,
        // },
        // 1000
        // );
        // }
        // });

        // Making img tag src image to parent's background image
        //
        // $('.hero-wrap').each(function() {
        // $(this).css(
        // 'background-image',
        // 'url(' +
        // $(this)
        // .find('img')
        // .attr('src') +
        // ')'
        // );
        // $(this)
        // .find('img')
        // .remove();
        // });

        // Owl Carousel For Hero Slider

        var owlone = $('.owlOne');

        owlone.owlCarousel({
                loop: true,
                margin: 0,
                nav: false,
                dots: false,
                items: 1,
            }

        );

        // // Go to the next item
        $('#left-btn').click(function () {
            owlone.trigger('prev.owl.carousel');
        });

        // // Go to the previous item
        $('#right-btn').click(function () {
            owlone.trigger('next.owl.carousel');
        });

        // Text ReadMore (Extra Content Hidden)

        // $("#icon-image").snowfall({
        //     flakeCount: 150,
        //     maxSpeed: 10,
        //     // flakeColor: '#58b8d6',
        //     flakeColor: '#7d7676',
        //     round: true,
        //     maxSize: 6
        // });



        $(function () {

                // Readmore Text Function ReadMore()

            }



        );



        // Gallery Images

        // img-wrap class is used to copy image src to anchore tag

        // href value to activate lightbox

        // $('.img-wrap').each(function() {

        // $(this).attr(

        // 'href',

        // $(this)

        // .find('img')

        // .attr('src')

        // );

        // });



        // LOad More Content

        // Load more Trainers Section Content



        // $('.blog').hide();

        // $('.blog')

        // .slice(0, 7)

        // .show();

        // $('.loadMore').on('click', function(e) {

        // e.preventDefault();

        // $('.blog:hidden')

        // .slice(0, 3)

        // .slideDown();

        // if ($('.blog:hidden').length = = 0) {
        // $('.loadMore').text('No More Content');
        // }
        // });
    }

);