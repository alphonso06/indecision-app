import React from 'react'

// This is a Stateless Functional Component
// Basically a 'render-only' component
function Header(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

export default Header