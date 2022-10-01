import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add"

function CreateArea(props){


    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({title:"", content:""});//hooks; note var contains 1object name nd value

    function handleChange(event){
        // console.log(event.target);
        const {name , value} = event.target; // we have name nd value like in hooks, name store inpt field value, value store txtare value

        setNote(prevNotes => {//see hoks earler note is empty strng, setNote collect new dta from usr passes to its functn, prevnote is a argument whch stors previusly typed data
            return{
                ...prevNotes, [name]: value //prevNote is(spread operator) previusly typed note along with or concatente with name its key pair
            };
        });
    }

    function submitNote(event){
        props.onAdd(note); //it comes thr the main cretare function sends from app js asa props.. reads  onAdd function find in app.js it will succflly added, after we hve to empty the input ares
        setNote({title:"", content:""}); //tis wil make empty lines of inpt flds after submit the data throgh it
        event.preventDefault(); //it ensures that tasks/notes only reloads, not entire page
    }

    function expand(){
        setExpanded(true);
    }

    return( //below is html lines inside inpt,txtarea we use onchange-DOM Associated function name is handleChnage enclosed with {} since its a react not a gen js
        <div>
            <form action="" className="create-note">
            {isExpanded &&(
                <input type="text" name="title" placeholder="Title .." value={note.title} onChange={handleChange} />
            )}

                <textarea name="content"  rows={isExpanded ? 3 : 1} onClick= {expand} placeholder="Add Notes..." value={note.content} onChange={handleChange} />
                <Fab onClick = {submitNote}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    )
}
//Fab tag is a meterial ui code tag for icon to submit the notes/task detials;; <Addicon /> is a icon
export default CreateArea