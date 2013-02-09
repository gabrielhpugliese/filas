
Template.tempo.events = {
    'click button[type=submit]' : function(event) {
        event.preventDefault();
        var params = {
            'local': '',
            'tempo': ''
        };
        
        _.map(params, function(value, param){
            jQuery('input[name='+param+']').parent().find('.label').hide();
        });
        
        var form_ok = true;
        _.map(params, function(value, param){
            var param_value = document.getElementsByName(param)[0].value;
            if (param_value) {
                params[param] = param_value;
            } else {
                var text = '';
                console.log(param)
                console.log(parseFloat(param_value))
                if (param == 'tempo' && (!parseFloat(param_value) || 
                    parseFloat(param_value) < 0)) {
                    text = 'Precisa ser maior que 0';
                } else {
                    text = 'Necessário';
                }
                jQuery('input[name='+param+']').parent().find('.label').text(text).show();
                form_ok = false;
            }
        });
        if (!form_ok) 
            return;
        
        Tempos.insert(params);
        document.getElementsByName('local')[0].value = '';
        document.getElementsByName('tempo')[0].value = '';
        
        jQuery('#success').show();
        Meteor.setTimeout(function(){
            jQuery('#success').fadeOut('slow');
        }, 10000);
    }
}
