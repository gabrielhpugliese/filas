
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
    },
    'click #fs_search_results a' : function(event) {
        event.preventDefault();
        jQuery('input[name=local]').val(event.target.innerText);
        jQuery('#fs_search_results').html('');
    },
    'click input[name=local]' : function(event){
        var lat = -15.6778, 
            lon = -47.4384;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos){
                lat = pos.coords.latitude;
                lon = pos.coords.longitude;
            });
        } else console.log('Geolocation not supported');
        
        Meteor.defer(function(){
            jQuery('input[name=local]').fs_suggest({
                'client_id'     : 'WIMV54WRBAJKJHM4ZOS5BVYWALR1KLE0X4KAUDTOB1ZF13IH',
                'client_secret' : 'Y0PI1REPBRLY0UH3WJCN3XIMD0LZS1ZOCWCPAFVDXV1B2INF',
                'll' : lat+','+lon, 
                'limit' : 10 
            });
        });
    }
}
