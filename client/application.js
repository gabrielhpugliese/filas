if (Meteor.isClient) {
    Meteor.startup(function(){
        Meteor.autosubscribe(function(){
            Meteor.subscribe('Medias');
            Meteor.subscribe('Tempos');
        });
    });
}
