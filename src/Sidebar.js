import React from 'react'

function Sidebar(props) {
  const notes = props.notes;
  return (
    <div className='sidebar'>
      <div className='header'>
        <h2>Notes</h2>
        <button className='trans' onClick={props.Addnote}> Add Note </button>
      </div>
      
      {notes.map((note) => (
        <div  
          className={`note ${note.id === props.active? "active":""}`}
          onClick={() => props.setactive(note.id)}
        >
          <div className='note-details'>
            <h4>{note.title}</h4>
            <p className='note-body'>{note.body && note.body.substr(0, 30) + "..."}</p>
            <small>{note.lastmodified}</small>
          </div>
          <button onClick={() => props.Delete(note.id)}>Delete</button>
        </div>
      ))}
      
    </div>
  )
}

export default Sidebar