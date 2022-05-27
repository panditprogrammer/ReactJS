import React, { useState } from 'react'

function NoteFields(props) {

    const [Notes, setNotes] = useState({ title: "", desc: "" });
    const [show, setShow] = useState(false)


    const inputHandler = (event) => {
        const { name, value } = event.target;
        setNotes((previousData) => {
            return { ...previousData, [name]: value }
        })
    }

    // add on btn clicked 
    const addNotes = () => {

        if (Notes.title.trim() === "") {
            alert("Title can't be empty!");
        } else if (Notes.desc.trim() === "") {
            alert("Description can't be empty!");
        } else {
            props.addNote(Notes);
        }
        // remove previous input
        if (Notes.title.trim() !== "" && Notes.desc.trim() !== "") {
            setNotes({
                title: "",
                desc: ""
            })
        }
    }

    const showHandler = () => {
        setShow(true);
    }


    document.addEventListener("dblclick",()=>{
        setShow(false);
    })

    return (
        <div className="note_field_container">
            <h1>Take a Note</h1>
            <div className='note_field'>
                <div className='form'>

                    {show ? <input autoFocus="on" type="text" name='title' onChange={inputHandler} value={Notes.title} placeholder='Title' /> : null}

                    <textarea name="desc" onClick={showHandler} onChange={inputHandler} value={Notes.desc} id="note" cols="10" rows={show?5:1} placeholder='Write a note here'></textarea>

                    {show ? <span><button onClick={addNotes}>+</button></span> : null}
                </div>
            </div>
        </div>
    )
}

export default NoteFields