

Template.locais.top10 = function(){
    return Medias.find({}, {limit: 10, $sort: {tempo: -1}});
}
