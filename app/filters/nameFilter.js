angular.module("phoneList")
    .filter("name", function () {
        return function (input) {
            let userName = input.split(" ");
            let userNameFormated = userName.map((name) => {
                if (/(da|dos|DOS|DA)/.test(name)) return name.toLowerCase();
                return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
            })
            return userNameFormated.join(" ");
        }
    })