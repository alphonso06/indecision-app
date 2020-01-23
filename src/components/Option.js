import React from 'react'

function Option(props) {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => { props.handleDeleteSingleOption(props.optionText) }}>
                Remove
             </button>
        </div>
    )
}

export default Option