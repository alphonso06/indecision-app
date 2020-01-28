import React from 'react'
import Option from './Option'

function Options(props) {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">List of Things</h3>
                <button className="button--link" onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add option to start</p>}
            {
                props.options.map(function (option, index) {
                    return <Option
                        key={option}
                        optionText={option}
                        count={index + 1}
                        handleDeleteSingleOption={props.handleDeleteSingleOption}
                    />
                })
            }
        </div>
    )
}

export default Options