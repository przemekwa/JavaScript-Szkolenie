
var _ = require("lodash");

var worker = function(userCollection) {

    var result = _.forEach(userCollection, function (item) {

        if (item.population > 1 )
        {
            item.size = "big"
        }
        else if (item.population < 0.5 )
        {
            item.size = "small"
        }
        else
        {
            item.size = "med"
        }




     return item;






    });

    return result;
    };



// export the worker function as a nodejs module
module.exports = worker;