define(['knockout'], function (ko) {
    var PageViewModel = function () {
        var self = this;
        self.valueOne = ko.observable(0);
        self.valueTwo = ko.observable(0);
        self.total = ko.pureComputed(function () {
            return self.valueOne() + self.valueTwo();
        });
    }

    return PageViewModel;
});