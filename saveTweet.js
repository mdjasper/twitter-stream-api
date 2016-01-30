geo = require('geocoder'),
    firebase = require('firebase'),
    db = new Firebase('https://cs7930.firebaseio.com/');

module.exports = function (tweet){
    if(tweet.place && tweet.place.country_code === 'US') {
        geo.geocode(tweet.place.full_name, function (err, data) {
            if(err){
                console.log(err);
            } else {
                var state;
                if(data.results[0]){
                    data.results[0].address_components.forEach(function(component){
                        if(component.types.indexOf('administrative_area_level_1') > -1){
                            state = component.short_name;
                        }
                    });
                }

                if(state){
                    console.log('Saved Tweet! ' + tweet.id);
                    db.push({
                        state: state,
                        for: tweet.text.toLowerCase().indexOf('trump') ? 'trump' : 'hillary',
                        tweet: tweet
                    });
                }
            }
        });
    }
};