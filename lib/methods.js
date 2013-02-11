function FormError(errors){
    this.errors = errors;
}

Meteor.methods({
    save_tempo: function(params) {
        var errors = {};
        _.map(params, function(value, param){
            var text = '';
            if (!value) {
                text = 'Necessário';
            } else if (param == 'tempo' && (!parseFloat(value) || 
                       parseFloat(value) < 0)){
                text = 'Precisa ser maior que 0';
            }
            if (text)
                errors[param] = text;
        });
        if (!_.isEmpty(errors)) 
            return {'errors': errors};
        
        params['tempo'] = parseFloat(params['tempo']);
        var media = Medias.findOne({local: params['local']});
        if (media){
            var tempo = (params['tempo'] + media['tempo']) / 2
            Medias.update({_id: media['_id']}, {$set: {tempo: tempo}});
        } else {
            Medias.insert(params);
        }
        return Tempos.insert(params);
    }
});