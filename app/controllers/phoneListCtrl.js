angular.module("phoneList")
  .controller("phoneListCtrl", function ($scope, editContact, generateSerial, contactApi, operadorasApi) {
    $scope.contacts = [];
    $scope.createContact = function () {
      if ($scope.phone.length < 8 || $scope.phone.length > 9) {
        alert("Adicione um numero Valido");
      } else {
        $scope.validate = $scope.contacts.findIndex((phone) => phone.phone === $scope.phone)
        if ($scope.validate < 0) {
          $scope.contacts.push({
            name: $scope.name,
            phone: $scope.phone,
            date: $scope.date,
          });

          $scope.name = "";
          $scope.phone = "";
          $scope.date = "";

          contactApi.getData();
          operadorasApi.getOperadoras();
          generateSerial.generate();
        }
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

    $scope.error = "O numero de telefone e igual a um já adicionado!";
  });
