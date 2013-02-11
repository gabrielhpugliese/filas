Medias = new Meteor.Collection('medias');
Tempos = new Meteor.Collection('tempos');

if (Meteor.isServer) {
    Meteor.startup(function(){
        Tempos._ensureIndex({'local': 1});
        Medias._ensureIndex({'local': 1}, {unique: 1});
    });
}