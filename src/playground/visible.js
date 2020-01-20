let text

function toggle () {
    if (!text) {
        text = <p>These are some details, interesting stuff right?</p>
        render()
    } else {
        text = null
        render()
    }
}

const appRoot = document.querySelector('#app')
function render () {
    const page = (
        <div>
            <h1>Visibility Thing!</h1>
            <button onClick={toggle}>{(!text) ? 'Show' : 'Hide'}</button>
            {text}
        </div>
    )
    ReactDOM.render(page, appRoot)
}

render()