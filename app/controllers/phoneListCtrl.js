angular.module("phoneList").controller("phoneListCtrl", function ($scope) {
  $scope.contacts = [];
  $scope.createContact = function () {
    $scope.contacts.push({
      id: $scope.index,
      name: $scope.name,
      phone: $scope.phone,
    });

    $scope.name = "";
    $scope.phone = "";
  };

  $scope.deleteContact = function (name) {
    $scope.contacts.splice(
      $scope.contacts.findIndex((index) => index.name === name),1
    );
  };
});
