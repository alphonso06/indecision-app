class Counter extends React.Component {
    constructor (props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }

    componentDidMount () {
        try {
            const json = localStorage.getItem('count')
            const count = JSON.parse(json)

            if (!isNaN(count)) {
                this.setState(function () {
                    return {
                        count // return prop count
                    }
                })
            }

        } catch (e) {
            // okay maybe print some error into the console
            console.log('Unable to read value of count!')
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count)
            localStorage.setItem('count', json)
        }
    }

    componentWillUnmount () {
        console.log('component will be unmounted')
    }

    handleAddOne () {
        this.setState(function (prevState) {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne () {
        this.setState(function (prevState) {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset () {
        this.setState(function () {
            return {
                count: 0
            }
        })
    }
    
    render () {
        return ( 
            <div> 
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.querySelector('#app'))