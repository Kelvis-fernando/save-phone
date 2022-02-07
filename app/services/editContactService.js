angular.module("phoneList").factory("editContact", function () {
    let _getData = function (contact) {
        window.localStorage.setItem("contacts", JSON.stringify(contact));
    }

    let _clearData = function () {
        window.localStorage.removeItem("contacts");
    }

    return {
        getData: _getData,
        clearData: _clearData,
    };
})