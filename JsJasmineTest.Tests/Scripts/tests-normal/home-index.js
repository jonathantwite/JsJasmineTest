/// <reference path="../jasmine/jasmine.js" />
/// <reference path="../../../jsjasminetest/scripts/home-index.js" />

describe("dataViewModel", function () {
    it("initialises with 2 values", function () {
        var label = 2;
        var value = "Hello";
        var dvm = new DataViewModel(label, value);

        expect(dvm.label()).toBe(label);
        expect(dvm.value()).toBe(value);
    });

    it("initialises with 1 value", function () {
        var label = 2;
        var dvm = new DataViewModel(label);

        expect(dvm.label()).toBe(label);
        expect(dvm.value()).toBe(undefined);
    });

    it("initialises with 0 value", function () {
        var dvm = new DataViewModel();

        expect(dvm.label()).toBe(undefined);
        expect(dvm.value()).toBe(undefined);
    });
});

describe("pageViewModel", function () {
    it("initialises with Welcome message", function () {
        var pvm = new PageViewModel();

        expect(pvm.pageTitle()).toBe("Welcome");
        expect(pvm.data().length).toBe(0);
    });

    it("addData with label", function () {
        var pvm = new PageViewModel();
        var label = "new label";
        pvm.addData(label);

        expect(pvm.data().length).toBe(1);
        expect(pvm.data()[0].label()).toBe(label);
    });

    it("addData without label", function () {
        var pvm = new PageViewModel();
        pvm.addData();

        expect(pvm.data().length).toBe(1);
        expect(pvm.data()[0].label()).toBe(1);
    });
});