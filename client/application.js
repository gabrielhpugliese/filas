if (Meteor.isClient) {
    Meteor.startup(function(){
        Meteor.autosubscribe(function(){
            Meteor.subscribe('Tempos');
        });
    });
}
