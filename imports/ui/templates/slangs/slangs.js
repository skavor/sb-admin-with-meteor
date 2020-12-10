import { Template } from 'meteor/templating';
import {Slangs} from '../../../api/slangs/collection'
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import './slangs.html';
import './slang.html';
import './list-slang.html';

AutoForm.setDefaultTemplate('bootstrap4')


const slangSchema = new SimpleSchema({
  slang:{
    type: String,
    label: "Name",
    max: 20
  },
  definition:{
    type: String,
    label: "Description",
    max: 250}
  },
  { tracker: Tracker }
);

Template.Slangs.onCreated(function () {
  this.subscribe("slangs");

  this.slang = new ReactiveVar(null);
});

Template.Slangs.helpers({
  slangs: function(){
      return Slangs.find({}, { sort: { createdAt: -1 }}).fetch();
  },
  currentSlang() {
    return Template.instance().slang.get();
  }
});

Template.Slangs.events({
  'click #add':function(event, template){
       event.preventDefault();
       template.slang.set(null);
       $('#slangFormModal').modal('show');    
  },
  'click .update':function(event, template){
    const slang = Slangs.findOne({_id: this._id});
    template.slang.set(slang);

    $('#slangFormModal').modal('show');
    
  }
});
Template.NewSlangs.helpers({
    slangSchema(){
      return slangSchema;
    },
    currentSlang() {
      return this.slang;
    }
  });
  Template.ListSlangs.events({
      
      'click .delete':function(event){
           event.preventDefault(); 
           const id = this._id
          Meteor.call('Slangs.delete',id,function(error, result) {
              if (error) {
                  alert('slang not deleted');
              } else {
                  alert('slang has been deleted!');
                  console.log(id)
              }
          });
          
      }
  })
  
  AutoForm.addHooks('insertSlangForm', {
    onSubmit: function(slang, updateDoc, currentDoc) {
      // You must call this.done()!
      //this.done(); // submitted successfully, call onSuccess
      //this.done(new Error('foo')); // failed to submit, call onError with the provided error
      //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
      self = this;
      e=this.event;
      e.preventDefault();
  
      if (this.docId) {
        Meteor.call('Slangs.update',this.docId, slang.slang,slang.definition,(error,res) => {
          if(!error){
             self.done();
             $('#slangFormModal').modal('hide');
             console.log(slang)
          }else{
            self.done(new Error(error.reason));
            alert(error.reason)
          }
        })  
      } else {
        Meteor.call('Slangs.add',slang.slang,slang.definition,(error,res) => {
          if(!error){
             self.done();
             $('#slangFormModal').modal('hide');
             console.log(slang)
          }else{
            self.done(new Error(error.reason));
            alert(error.reason)
          }
       })  
      } 
    }});