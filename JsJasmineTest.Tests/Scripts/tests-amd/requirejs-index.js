define(['requirejs-index-viewmodel'], function (PageViewModel) {
    describe("PageViewModel", function () {
        it("initialises with total = 0", function () {
            var pvm = new PageViewModel();
            expect(pvm.total()).toEqual(0);
        });
    });
});
