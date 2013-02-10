
Template.tempo.events = {
    'click button[type=submit]' : function(event) {
        event.preventDefault();
        var params = {
            'local': document.getElementsByName('local')[0].value,
            'tempo': document.getElementsByName('tempo')[0].value
        };
        
        Meteor.call('save_tempo', params, function(error, result){
            if (result && result['errors']) {
                _.map(result['errors'], function(value, param){
                    jQuery('input[name='+param+']').parent().find('.label').text(value).show();
                });
            } else {
                jQuery('#success').show();
                Meteor.setTimeout(function(){
                    jQuery('#success').fadeOut('slow');
                }, 10000);
                _.map(params, function(value, param){
                    jQuery('input[name='+param+']').val('');
                    jQuery('input[name='+param+']').parent().find('.label').hide();
                });
            }
        });
    }
}
