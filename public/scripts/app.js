'use strict';

console.log('this is app.js');

// JSX - JavaScript XML
var app = {
    title: 'Indecision App',
    subtitle: 'This is cool yes?',
    options: []
};

function getOptions(options) {
    if (options.length > 0) {
        return React.createElement(
            'p',
            null,
            'Here are your options:'
        );
    } else {
        return React.createElement(
            'p',
            null,
            'No Options'
        );
    }
}

function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log('Options Array Length: ', app.options.length);
        render();
    }
}

function clearOptions() {
    app.options = [];
    render();
    console.log('Options Array Length: ', app.options.length);
}

function onMakeDecision() {
    var numberOfOptions = app.options.length;
    var randomNum = Math.floor(Math.random() * numberOfOptions);
    var option = app.options[randomNum];

    alert(option);
}

var appRoot = document.querySelector('#app');
function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        getOptions(app.options),
        React.createElement(
            'button',
            { disabled: app.options.length < 1, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: clearOptions },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
}

render();
