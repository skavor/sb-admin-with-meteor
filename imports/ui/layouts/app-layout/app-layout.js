import {Template} from 'meteor/templating'


import '../../templates/sidebar/sidebar'
import '../../templates/header/header'
import '../../templates/footer/footer'

import './app-layout.html'


Template.AppLayout.onCreated(function () {
    // Scroll to top button appear
    $(document).on('scroll', function() {
        console.log('hello')
        const scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });
});

Template.AppLayout.events({
    'click #sidebarToggle, click #sidebarToggleTop': function () {
        $("body").toggleClass("sidebar-toggled");
        const $sidebar = $(".sidebar");
        $sidebar.toggleClass("toggled");
        if ($sidebar.hasClass("toggled")) {
            $('.sidebar .collapse').collapse('hide');
        };
    },
    'click #logout'(event, template) {
        template.isLoggingOut = true;
    },
    'hidden.bs.modal #logoutModal'(event, template) {
        if (template.isLoggingOut) {
            template.isLoggingOut = false;
            FlowRouter.go('/login');
        }
    },
    'click a.scroll-to-top'() {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($('body').offset().top)
        }, 1000);
        e.preventDefault();
    }
});

Template.AppLayout.onDestroyed(function () {
    // Cancel Scroll Handler
    $(document).off('scroll');
});