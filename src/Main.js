import React from 'react';
import ReactMarkdown from 'react-markdown'

function Main(prop) {
  
      const edit = (key, value) => {
          prop.onedit({
            ...prop.getactive,
            [key]:value,
            modified:Date.now()
          })
      }


    if (!prop.getactive) {
      return (
        <div className='selected'>No Note Selected </div>
      )
    }
  return (
    <main className='main'>
      <div className='field'>
        <input 
          type="text"
          name='title'
          className='input'
          autoFocus
          required
          value={prop.getactive.title}
          onChange={(event) => edit ("title", event.target.value)}
        />
        <textarea 
         className='text-area'
         name='body'
         value={prop.getactive.body}
         placeholder='start typing-----'
         onChange={(event) => edit ("body", event.target.value)}
        />
      </div>
      <div className='preview'> 
        <strong>{prop.getactive.title}</strong>
        <ReactMarkdown> 
          {prop.getactive.body} 
        </ReactMarkdown> 
      </div>
    </main>
  )
}

export default Main;