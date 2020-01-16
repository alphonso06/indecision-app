console.log('this is app.js')

// JSX - JavaScript XML
let app = {
    title: 'Indecision App',
    subtitle: 'This is cool yes?',
    options: []
}

function getOptions(options) {
    if (options.length > 0) {
        return <p>Here are your options:</p>
    } else {
        return <p>No Options</p>
    }
}

function onFormSubmit (e) {
    e.preventDefault()
    
    const option = e.target.elements.option.value

    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
        console.log('Options Array Length: ', app.options.length)
        render()
    }
}

function clearOptions () {
    app.options = []
    render()
    console.log('Options Array Length: ', app.options.length)
}

function onMakeDecision () {
    const numberOfOptions = app.options.length
    const randomNum = Math.floor(Math.random() * numberOfOptions)
    const option = app.options[randomNum]
    
    alert(option)
}

const appRoot = document.querySelector('#app')
function render () {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            {getOptions(app.options)}
            <button disabled={app.options.length < 1} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={clearOptions}>Remove All</button>
            <ol>
            {
                app.options.map(function (option) {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

render()