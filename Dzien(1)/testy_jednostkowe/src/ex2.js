// guardianGenerator
// jako parametry przyjmuje listę użytkowników
// {id: 1}
// - i zwraca funkcje, które przyjemje listę użytkowników
// - i zwraca true jesli wszysyc podani znajdujują się w tej orginalnej

function guardianGenerator(validUser) {
    return function (userToCheck) {
        return userToCheck.every(function (itemToCheck) {
            return validUser.some(function (itemToValid) {
                 return itemToCheck.id === itemToValid.id;
            });
        });
    };
};