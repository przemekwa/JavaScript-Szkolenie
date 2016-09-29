describe('guardianGenerator', function () {
    it ('Pierwszy', function () {
            var validUsers = [{id: 1},{id: 2},{id: 5}];
            var guardian = guardianGenerator(validUsers);
            var userToCheck = [{id: 1},{id: 5}];

            expect(guardian(userToCheck)).toBe(true);

        });
});

describe('guardianGenerator', function () {
    it ('Pierwszy', function () {
        var validUsers = [{id: 1},{id: 2},{id: 5}];
        var guardian = guardianGenerator(validUsers);
        var userToCheck = [{id: 1},{id: 6}];

        expect(guardian(userToCheck)).toBe(false);

    });
});
