import React from 'react'
import Option from './Option'

function Options(props) {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add option to start</p>}
            {
                props.options.map(function (option) {
                    return <Option
                        key={option}
                        optionText={option}
                        handleDeleteSingleOption={props.handleDeleteSingleOption}
                    />
                })
            }
        </div>
    )
}

export default Options