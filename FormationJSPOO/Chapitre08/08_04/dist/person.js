'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
    function Person(firstName, lastName) {
        var country = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Belgium';

        _classCallCheck(this, Person);

        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
    }

    _createClass(Person, [{
        key: 'sayHello',
        value: function sayHello() {
            return this.firstName + ' vous dit bonjour !';
        }
    }]);

    return Person;
}();
