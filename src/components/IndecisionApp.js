import React from 'react'
import Header from './Header'
import Action from './Action'
import AddOption from './AddOption'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    // this is now a class property
    // yes it's an arrow function, deal with it mr. author
    handleDeleteOptions = () => {
        // Empty the options array and re-render the result on the page
        this.setState(function () {
            return {
                options: []
            }
        })
    }

    handleDeleteSingleOption = (optionToRemove) => {
        this.setState(function (prevState) {
            return {
                options: prevState.options.filter(function (option) {
                    return optionToRemove !== option
                })
            }
        })
    }

    handlePick = () => {
        // This is basically the RNG
        const numberOfOptions = this.state.options.length
        const randomNum = Math.floor(Math.random() * numberOfOptions)
        const option = this.state.options[randomNum]

        this.setState(function (prevState) {
            return {
                selectedOption: option
            }
        })
    }

    handleCloseModal = () => {
        // Clears the selectedOption state back to default or undefined
        // This will have the expected and desired side-effect of closing the modal
        this.setState(function (prevState) {
            return {
                selectedOption: undefined
            }
        })
    }

    handleAddOption = (option) => {
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

    componentDidMount() {
        // catch any potential invalid json input values
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing :D
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // if the state of the array changes, store it in 'json'
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('component will be unmounted')
    }

    render() {
        const subtitle = 'A very interesting subtitle'
        return (
            <div>
                <Header subtitle={subtitle} />

                    <div className="container">
                        <Action
                            hasOptions={this.state.options.length > 0}
                            handlePick={this.handlePick}
                        />
                        
                        <div className="widget">
                            <Options
                                options={this.state.options}
                                handleDeleteOptions={this.handleDeleteOptions}
                                handleDeleteSingleOption={this.handleDeleteSingleOption}
                            />

                            <AddOption
                                handleAddOption={this.handleAddOption}
                            />
                        </div>

                    </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}