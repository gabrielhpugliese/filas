Session.set('MediasLoading', true);
Meteor.subscribe('Medias', function(){
    Session.set('MediasLoading', false);
});
Meteor.subscribe('Tempos');
