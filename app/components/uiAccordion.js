angular.module("phoneList").directive("accordions", function () {
    return {
        controller: function ($scope, $element, $attrs) {
            let accordions = [];

            this.registerAccordion = (accordion) => {
                accordions.push(accordion);
            }

            this.closeAll = function () {
                accordions.forEach((accordion) => {
                    accordion.isOpened = false;
                });
            }
        }
    }
})

angular.module("phoneList").directive("uiAccordion", function () {
    return {
        templateUrl: "view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^accordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.open = function () {
                ctrl.closeAll();
                scope.isOpened = true;
            }
        }
    }
})