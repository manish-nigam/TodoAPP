import React from 'react'
import './CSS files/Header.css';

const Header = () => {
    return (
        <div className='titlecontainer'>
            <h1>Todos App</h1>
            <p>Items will presist in the browser local storage</p>
        </div>
    )
}

export default Header