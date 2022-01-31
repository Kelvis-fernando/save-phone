angular.module("phoneList")
  .controller("phoneListCtrl", function ($scope, editContact, generateSerial) {
    console.log(generateSerial.generate())
    $scope.contacts = [];
    $scope.createContact = function () {
      if ($scope.phone.length < 8 || $scope.phone.length > 9) {
        alert("Adicione um numero Valido");
      } else {
        $scope.contacts.push({
          name: $scope.name,
          phone: $scope.phone,
          date: new Date(),
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

    $scope.editContact = function (contact) {
      editContact.getData(contact);
      editContact.clearData();
    }

    $scope.orderBy = function (campo) {
      $scope.orderCamp = campo;
      $scope.directionOrder = !$scope.directionOrder;
    }

    $scope.error = "Tente novamente mais tarde!";
  });
