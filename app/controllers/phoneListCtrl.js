angular.module("phoneList").controller("phoneListCtrl", function ($scope) {
  $scope.contacts = [];
  $scope.createContact = function () {
    if ($scope.phone.length < 8 || $scope.phone.length > 9) {
      alert("Adicione um numero Valido");
    } else {
      $scope.contacts.push({
        id: $scope.index,
        name: $scope.name,
        phone: $scope.phone,
      });

      $scope.name = "";
      $scope.phone = "";
    }
  };

  $scope.deleteContact = function (name) {
    $scope.contacts.splice(
      $scope.contacts.findIndex((index) => index.name === name),
      1
    );
  };
});
