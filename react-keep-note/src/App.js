import { React, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import "./App.css"
import NoteFields from './NoteFields'
import Note from './Note'



function App() {
  const [noteItems, setNoteItems] = useState([])

  // get all notes from child and render using map method 
  const addNote = (allNotes) => {
    setNoteItems((previousData) => {
      return [...previousData, allNotes];
    });

  }


  // delete an item 
  const deleteNote = (id) => {

    // return all excep this {id}
    let allNotes = noteItems.filter((value, index) => {
      return index !== id;
    })

    setNoteItems(allNotes)
  }


  return (
    <>
      <Header></Header>

      <NoteFields addNote={addNote}></NoteFields>

      <section className="note_container">
        {noteItems.map((value, index) => {
          return <Note key={index} id={index} title={value.title} desc={value.desc} delNote={deleteNote}></Note>
        })}
      </section>

      <Footer></Footer>
    </>
  )
}

export default App