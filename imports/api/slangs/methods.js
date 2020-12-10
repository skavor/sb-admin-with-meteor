import {Meteor} from 'meteor/meteor';
import { Slangs } from './collection';
 
Meteor.methods({
    'Slangs.add'(slang,definition) {
            const slangId = Slangs.insert({slang, definition, authorId: this.userId});
    },
    'Slangs.update'(id,name,definition){
            return Slangs.update({_id: id, authorId: this.userId},{
                $set:{slang:name,definition:definition}
            });  
    },
    'Slangs.delete'(id){  
            return Slangs.remove({_id:id, authorId: this.userId}); 
    }
})