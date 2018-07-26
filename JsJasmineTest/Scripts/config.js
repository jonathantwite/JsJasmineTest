require.config({
    baseUrl: "/scripts/",
    paths: {
        "knockout": "knockout-3.4.2"
    }
});

require(['knockout', 'requirejs-index-viewmodel'], function (ko, PageViewModel) {
    var pvm = new PageViewModel();

    pvm.valueOne(3);
    pvm.valueTwo(5);

    ko.applyBindings(pvm);

    return pvm;
});