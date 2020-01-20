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
            return 'That already exists!'
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

class Header extends React.Component {
    render () {
        return ( 
            <div>
                <h1>{this.props.title}</h1>
                <h3>{this.props.subtitle}</h3>
            </div>
        )
    }
}

class Action extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map(function (option) {
                        return <Option key={option} optionText={option} />
                    })
                }
                <Option />
            </div>
        )
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
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