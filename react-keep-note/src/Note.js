import React from 'react'

function Note(props) {

    const deleteThisNote = ()=>{
        props.delNote(props.id);
    }

    return (
        <div className='note' key={props.id}>
            <h4 className="title">{props.title}</h4>
            <p className="description">{props.desc}</p>
            <div className='btndiv'>
                <button className='del' onClick={deleteThisNote}><i className="fa-solid fa-trash-can"></i></button>
                {/* <button className='edit'><i className="fa-regular fa-pen-to-square"></i></button> */}
            </div>
        </div>
    )
}

export default Note