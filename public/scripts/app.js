'use strict';

var text = void 0;

function toggle() {
    if (!text) {
        text = React.createElement(
            'p',
            null,
            'These are some details, interesting stuff right?'
        );
        render();
    } else {
        text = null;
        render();
    }
}

var appRoot = document.querySelector('#app');
function render() {
    var page = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Thing!'
        ),
        React.createElement(
            'button',
            { onClick: toggle },
            !text ? 'Show' : 'Hide'
        ),
        text
    );
    ReactDOM.render(page, appRoot);
}

render();
