import React from 'react'

function Option(props) {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.optionText}</p>
            <button className="button--link" onClick={(e) => { props.handleDeleteSingleOption(props.optionText) }}>
                Remove
             </button>
        </div>
    )
}

export default Option