"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    /**
     * Person class
     *
     * @param id
     * @param name
     * @param age
     */
    function Person(id, name, age) {
        _classCallCheck(this, Person);

        this.id = id;
        this.name = name;
        this.age = age;
    }

    /**
     * Return the id of the Person.
     * @returns {number}
     */


    _createClass(Person, [{
        key: "getId",
        value: function getId() {
            return this.id;
        }

        /**
         * Generate a JSON object.
         * @returns {{id: {number}, name: {string}, age: {string}}}
         */

    }, {
        key: "toObj",
        value: function toObj() {
            return {
                id: this.id,
                name: this.name,
                age: this.age
            };
        }
    }]);

    return Person;
}();