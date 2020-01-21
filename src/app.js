class IndecisionApp extends React.Component {
    constructor (props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            options: []
        }
    }

    handleDeleteOptions () {
        // Empty the options array and re-render the result on the page
        this.setState(function () {
            return {
                options: []
            }
        })
    }

    handlePick () {
        // This is basically the RNG
        const numberOfOptions = this.state.options.length
        const randomNum = Math.floor(Math.random() * numberOfOptions)
        const option = this.state.options[randomNum]

        alert(`You should ${option}`)
    }

    handleAddOption (option) {
        if (!option) {
            return 'That value is not valid :('
        } else if (this.state.options.indexOf(option) > -1) {
            return `"${option}" already exists!`
        }

        this.setState(function (prevState) {
            return {
                options: prevState.options.concat([option]) //--> Combines two arrays into a new array
            }
        })
    }

    render () {
        const title = 'Indecision App'
        const subtitle = 'Your everyday big brain think machine'
        return (
            <div>
                <Header title={title} subtitle={subtitle} />

                <Action
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} 
                />

                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                />

                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

// This is a Stateless Functional Component
// Basically a 'render-only' component
function Header (props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )
}

function Action (props) {
    return (
        <div>
            <button onClick={props.handlePick} disabled={!props.hasOptions}>
                What should I do?
                </button>
        </div>
    )
}

function Options (props) {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map(function (option) {
                    return <Option key={option} optionText={option} />
                })
            }
            <Option />
        </div>
    )
}

function Option (props) {
    return (
        <div>
            {props.optionText}
        </div>
    )
}

class AddOption extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption (e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState(function () {
            return { error }
        })
    }

    render () {
        return ( 
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

const appRoot = document.querySelector('#app')
ReactDOM.render(<IndecisionApp />, appRoot)