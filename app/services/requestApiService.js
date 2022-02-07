angular.module("phoneList").factory("contactApi", function ($http) {
    let _getData = function () {
        console.log('Dados...');
    }

    return {
        getData: _getData,
    }
})