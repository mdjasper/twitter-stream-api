var fs = require('fs'),
	data = require('./data/data.js'),
    hillary = [],
    hillaryTemp = [],
    trump = [],
    trumpTemp = [];



Object.keys(data).forEach(function(i){
	if(data[i].for === 'hillary'){
    	hillaryTemp['US-'+data[i].state] = hillaryTemp['US-'+data[i].state] + 1 || 1;
    } else {
		trumpTemp['US-'+data[i].state] = trumpTemp['US-'+data[i].state] + 1 || 1;
    }
});

for(s in hillaryTemp){
    hillary.push({
        id: s,
        value: hillaryTemp[s]
    })
}

for(s in trumpTemp){
    trump.push({
        id: s,
        value: trumpTemp[s]
    })
}

fs.writeFile('data/hillary.json', JSON.stringify(hillary), function (err) {
  if (err) return console.log(err);
  console.log('hillary.json written');
});

fs.writeFile('data/trump.json', JSON.stringify(trump), function (err) {
  if (err) return console.log(err);
  console.log('trump.json written');
});


//heat map https://www.amcharts.com/demos/us-heat-map/#