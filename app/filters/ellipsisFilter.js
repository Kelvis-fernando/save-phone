angular.module("phoneList")
    .filter("ellipsis", function () {
        return function (input) {
            if (input.length <= 6) return input
            let nameWidth = input.substring(0, 6) + "..."
            return nameWidth;
        }
    })