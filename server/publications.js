
if (Meteor.isServer) {
    
     Meteor.publish('Tempos', function(){
         return Tempos.find();
     });
}