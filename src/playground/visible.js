class VisibilityToggle extends React.Component {
    constructor (props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)

        this.state = {
            details: null
        }
    }

    handleToggleVisibility() {
        if (!this.state.details) {
            this.setState(function (prevState) {
                return {
                    details: <p>This is pretty cool don't you think?</p>
                }
            })
        } else {
            this.setState(function (prevState) {
                return {
                    details: null
                }
            })
        }
    }

    render () {
        return (
            <div>
                <h1>Visibility Toggle 2.0</h1>
                <button onClick={this.handleToggleVisibility}>
                    {(!this.state.details) ? 'Show' : 'Hide'}
                </button>
                {this.state.details}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector('#app'))