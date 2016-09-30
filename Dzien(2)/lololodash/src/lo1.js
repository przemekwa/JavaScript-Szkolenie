var _ = require('lodash');

var worker = function(userCollection) {

    return  _.filter(userCollection, {active: true});

};

// export the worker function as a nodejs module
module.exports = worker;


