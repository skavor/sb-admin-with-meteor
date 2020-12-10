import { Meteor } from "meteor/meteor";
import { Slangs } from './collection';

Meteor.publish('slangs',function(){

    // var future = new Future();

    // setTimeout(function() {
    //     // UPDATE: coding error here. This line needs to be
    //     //   future.return(People.find());
    //     // See the accepted answer for an alternative, too:
    //     //   Meteor._sleepForMs(2000);
    //     return People.find();
    // }, 2000);

    // Meteor._sleepForMs(2000);
    return Slangs.find({}, { sort: { createdAt: -1 }});
});