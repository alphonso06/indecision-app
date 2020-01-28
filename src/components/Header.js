import React from 'react'

// This is a Stateless Functional Component
// Basically a 'render-only' component
function Header(props) {
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle && <h3 className="header__subtitle">{props.subtitle}</h3>}
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
}

export default Header