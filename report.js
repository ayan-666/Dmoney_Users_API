const newman=require('newman');

newman.run({
    collection: require('./Collections/Dmoney_Users.postman_collection.json'),
    //environment: require('./Environment/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra:{
            export: './Reports/report.html',
        }
    }

}, function(err){
    if(err) {throw err; }
    console.log('Collection Complete Run');
});
