import React from 'react'
import Button from './Button'
const Header = ({ onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>Task Tracker</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add Task'} onClick={onAdd}></Button>
        </header>
    )
}

export default Header
