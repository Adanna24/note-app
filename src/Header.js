import React from 'react'

function Header() {
  return (
    <div className='note-header'> 
      <nav className='nav'>
        <img src='pictures/note.png' alt='note-img' id='note-img'/>
        <label htmlFor='note-img'> My Note APP</label>
      </nav>
      <div> <strong>React project one</strong></div>
    </div>
  )
}

export default Header;