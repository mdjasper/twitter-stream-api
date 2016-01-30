var fs = require('fs'),
    file = './data/export1.js',
    data = require(file),
    keys = Object.keys(data);

keys.forEach(function(key){
    data[key]["for"] = data[key].tweet.text.toLowerCase().indexOf('trump') > -1 ? 'trump' : 'hillary';
});

fs.writeFile(file, 'module.exports='+JSON.stringify(data)+';', function (err){
    if(err){
        console.log(err);
    }else{
        console.log('File written.');
    }
});