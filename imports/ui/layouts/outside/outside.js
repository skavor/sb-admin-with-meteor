import {Template} from 'meteor/templating';

import './outside.html'

Template.OutsideLayout.onCreated(function () {
    $('body').addClass('bg-gradient-primary');
});

Template.OutsideLayout.onDestroyed(function () {
    $('body').removeClass('bg-gradient-primary');
});