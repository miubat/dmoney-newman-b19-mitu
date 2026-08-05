const newman = require('newman');

newman.run({
    
    collection: require('./collection/Dmoney-B19.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    },
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});