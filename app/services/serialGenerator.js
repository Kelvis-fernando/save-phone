angular.module("phoneList").provider("generateSerial", function () {
    this.$get = function () {
        return {
            generate: function () {
                let serial = "";
                while (serial.length < 20) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 60);
                }

                return serial;
            }
        }
    }

})