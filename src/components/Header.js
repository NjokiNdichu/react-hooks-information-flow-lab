import React from 'react'


function Header({onDarkModeClick}) {
  return (
    <div>
        <h2>Shopster</h2>
        <button onClick = {onDarkModeClick}>Dark Mode</button>
    </div>
  )
}

export default Header
