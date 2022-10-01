import './App.css';
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import React, { useState } from "react";
import Note from "./components/Note";
import Footer from "./components/Footer";

function App() {

  const [notes, setNotes] = useState([]);
  
  function addNote(newNote){
    setNotes(prevNotes =>{
      return  [...prevNotes, newNote]; //it returns the prevNotes with newnotes of objects in an array
    });
    // console.log(notes);
  }

  function deleteNote(id){
    setNotes(prevNotes =>{  // setnotes function will take prevnote details
      return prevNotes.filter((noteItem,index) =>{
        return index !== index;
      });
    });
  }

  return (//onAddd is a props that sends a functio {addNote};; //title="Test" content="test content" this is to test props, which will read at note.jsx
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index)=>{
        return (
          <Note  key={index} 
          id = {index} 
          title ={noteItem.title} 
          content = {noteItem.content} 
          onDelete= {deleteNote}  />
        );
      })};
        <Footer />
    </div>
  );
}

export default App;
