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
            
        return Tempos.insert(params);
    }
});