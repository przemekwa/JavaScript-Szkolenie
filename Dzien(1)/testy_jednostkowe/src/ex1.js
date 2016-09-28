function nawiasy(s) {


    return s.split('').reduce(function (acc, item) {


        if (item === "(")
        {
            return acc + 1;
        }

        if (item === ")")
        {
            return acc -1;
        }

        return acc;



    }, 0);




}
