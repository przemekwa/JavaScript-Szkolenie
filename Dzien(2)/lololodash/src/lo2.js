
var _ = require("lodash");

var worker = function(userCollection) {


    return  _.sortBy(userCollection, function (item) {
        var t = item.quantity * -1;
        return t;
    });

};

// export the worker function as a nodejs module
module.exports = worker;


