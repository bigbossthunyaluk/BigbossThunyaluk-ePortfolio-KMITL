/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Hide #section in url
// Code from (https://stackoverflow.com/questions/23312006/remove-hashtag-from-url)
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});

var popupImgModal = document.getElementById('popupImgModal')
popupImgModal.addEventListener('show.bs.modal', function (event) {})


function ClickToShowImg(element) {
    document.getElementById("imgModalPreview").src = element.src;
}