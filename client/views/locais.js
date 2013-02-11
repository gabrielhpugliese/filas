

Template.locais.top10 = function(){
    return Tempos.find({}, {limit: 10, sort: {tempo: -1}});
}
