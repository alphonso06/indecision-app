'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonymous';
        var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.name = name;
        this.age = age;
    }

    _createClass(Person, [{
        key: 'getGreeting',
        value: function getGreeting() {
            return 'Hi ' + this.name + '!';
        }
    }, {
        key: 'getDescription',
        value: function getDescription() {
            return this.name + ' is ' + this.age + ' year(s) old';
        }
    }]);

    return Person;
}();

var me = new Person('Mikael Evangelista', 22);
console.log(me.getGreeting());

var anon = new Person();

var appRoot = document.querySelector('#app');
var greetingTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h2',
        null,
        me.getDescription()
    ),
    React.createElement(
        'h2',
        null,
        anon.getDescription()
    )
);
ReactDOM.render(greetingTemplate, appRoot);
