import { FlowRouter } from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout'


import '../../ui/layouts/app-layout/app-layout'
import '../../ui/layouts/outside/outside'

BlazeLayout.setRoot('body');

import '/imports/ui/templates/dashboard/dashboard'
import '../../ui/templates/forget-password/forget-password'
import '../../ui/templates/slangs/slangs'
import '../../ui/templates/login/login'
import '../../ui/templates/register/register'


FlowRouter.route('/',{
    name:'dashboard',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Dashboard'});
    }
})

FlowRouter.route('/slangs',{
    name:'slangs',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Slangs'});
    }
})
FlowRouter.route('/not-found',{
    name:'notFound',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'NotFound'});
    }
})
FlowRouter.route('/forget-password',{
    name:'forgetPassword',
    action:function(params,queryParams){
        BlazeLayout.render('OutsideLayout',{main:'ForgetPassword'});
    }
})
FlowRouter.route('/login',{
    name:'login',
    action:function(params,queryParams){
        BlazeLayout.render('OutsideLayout',{main:'Login'});
    }
})
FlowRouter.route('/register',{
    name:'register',
    action:function(params,queryParams){
        BlazeLayout.render('OutsideLayout',{main:'Register'});
    }
})

