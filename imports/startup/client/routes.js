import { FlowRouter } from 'meteor/kadira:flow-router';


import '../../ui/layouts/appLayout/appLayout'
import '../../ui/layouts/outside/outside'

BlazeLayout.setRoot('body');

import '/imports/ui/templates/dashboard/dashboard'
import '/imports/ui/templates/blank/blank'
import '../../ui/templates/forgetpassword/forgetpassword'
import '../../../imports/ui/templates/tables/table'
import '../../../imports/ui/templates/charts/chart'



FlowRouter.route('/',{
    name:'dashboard',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Dashboard'});
    }
})

FlowRouter.route('/blank',{
    name:'blank',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Blank'});
    }
})
FlowRouter.route('/buttons',{
    name:'buttons',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Buttons'});
    }
})
FlowRouter.route('/cards',{
    name:'cards',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Cards'});
    }
})
FlowRouter.route('/charts',{
    name:'charts',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Charts'});
    }
})
FlowRouter.route('/not_found',{
    name:'not_found',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'NotFound'});
    }
})
FlowRouter.route('/forget_password',{
    name:'forget_password',
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
FlowRouter.route('/tables',{
    name:'tables',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Tables'});
    }
})
FlowRouter.route('/utilities_animation',{
    name:'utilities_animation',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Utilities-animation'});
    }
})
FlowRouter.route('/utilities_border',{
    name:'utilities_border',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Utilities-border'});
    }
})
FlowRouter.route('/utilities_color',{
    name:'utilities_color',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Utilities-color'});
    }
})
FlowRouter.route('/utilities_other',{
    name:'utilities_other',
    action:function(params,queryParams){
        BlazeLayout.render('AppLayout',{main:'Utilities-other'});
    }
})
