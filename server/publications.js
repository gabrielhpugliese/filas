
if (Meteor.isServer) {
    Meteor.startup(function(){
        Tempos._ensureIndex({'local': 1});
    })
    
    Meteor.publish('Tempos', function(){
        return Tempos.find();
    });
}