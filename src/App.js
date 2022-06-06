import { useState, useEffect } from "react";
import { nanoid } from "nanoid"
import Search from "./Search";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Header from "./Header";


function App() {

  const [notes, setnotes] = useState(  () => JSON.parse(localStorage.getItem("notes-ss-ss")) ||  [
    {
      id:nanoid(),
      title:"NOTE 1",
      body:"body text",
      lastmodified:"just now"
    }
  ] )

  useEffect(() => {
    localStorage.setItem("notes-ss-ss", JSON.stringify(notes))
  }, [notes])

  const Addnote = () => {
    const date = new Date ()
    const modified = date.toLocaleDateString("en-GB", {
      hour:"2-digit",
      minute:"2-digit"
    });

    const newnote = {
      id: nanoid(),
      title: "Untitle Note",
      body:"",
      lastmodified:modified
    }

    const newarr = [newnote, ...notes]

    setnotes(newarr)
  }

  const Delete = (id) => {
    if (window.confirm("are you sure")) {
      setnotes(notes.filter(note => note.id !== id))
    }
  }

  const [active, setactive] = useState(false)

  const getactivenote = () => {
    return notes.find((note) => note.id === active)
  }

  
  const onEdit  = (updatednote) => {
    const updatedarr = notes.map((note) => {
      if (note.id === active) {
        return updatednote
      }
      else {
        return note
      };
    })

    setnotes(updatedarr);
  }

  const [search, setsearch] = useState("")

  return (
    <div className="body">
      <div className="head">
        <div className="container">
          <Header />
        </div>
      </div>
      <div className="container">
        <Search 
          search={setsearch}
        />
      </div>
      <div className="display">
        <Sidebar 
         key={notes}
         notes={notes.filter( (note) => note.body.toLocaleLowerCase().includes(search))}
         Addnote={Addnote}
         Delete={Delete}
         active={active}
         setactive={setactive}
        />
        <Main 
         getactive={getactivenote ()}
         onedit={onEdit}
        />
      </div>
    </div>
  );
}

export default App;
