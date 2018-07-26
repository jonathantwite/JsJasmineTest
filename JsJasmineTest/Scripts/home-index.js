; "use strict";

(function (window, document, ko) {

    var base = this;

    base.DataViewModel = function (label, value) {
        this.label = ko.observable(label);
        this.value = ko.observable(value);
    };



    base.PageViewModel = function () {
        var self = this;

        self.pageTitle = ko.observable("Welcome");
        self.data = ko.observableArray()

        self.deleteData = function (item) {
            self.data.remove(item);
        };

        self.addData = function (label) {
            label = label === undefined || label === null || label === '' || typeof label === "function" || typeof label === "object" ? self.data().length + 1 : label;
            self.data.push(new DataViewModel(label, ''));
        }
    }

    ko.applyBindings(new PageViewModel());


    return base;
}(window, document, ko));