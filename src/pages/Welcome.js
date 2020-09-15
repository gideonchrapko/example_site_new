import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <h1>Welcome Page</h1>
            <h5>Instructions</h5>
            <Link to="/Home">
                <button>
                Enter
                </button>
            </Link>
        </div>
    )
}

export default Welcome