
if (Meteor.isServer) {
    Meteor.publish('Tempos', function(){
        return Tempos.find();
    });
    Meteor.publish('Medias', function(){
        return Medias.find();
    });
}