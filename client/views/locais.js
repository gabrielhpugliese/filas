

Template.locais.top10 = function(){
    if (Session.get('MediasLoading'))
        return;
    
    var medias = Medias.find({}, {limit: 10, sort: {tempo: -1}}).fetch(),
        maior_tempo = medias[0]['tempo'],
        medias_norm = [];

    _.map(medias, function(media){
        media['perc'] = media['tempo'] / maior_tempo * 100;
        medias_norm.push(media);
    });
    
    return medias_norm;
}
