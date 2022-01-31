angular.module("phoneList")
    .directive("uiAlert", function () {
        return {
            templateUrl: "./view/alert.html",
            replace: true,
            strict: "AE",
            scope: {
                alertTitle: "@title",
                alertMessage: "=message"
            },
            transclude: true,
        }
    })