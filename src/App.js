import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './componets/Noteslist';

function App(props) {
  const [note,Setnote] = useState([
    {
    id:nanoid(),
    text:'type your text....',
    date:'10/10/1996' },
     {
      id:nanoid(),
      text:'type your text....',
      date:'10/10/1997' },
      {
        id:nanoid(),
        text:'type your text....',
        date:'10/10/1998' },
        {
          id:nanoid(),
          text:'type your text....',
          date:'10/10/1999' },
    
  ]);
console.log("note--app",note);
  return (
    <div className="App">
     <NotesList noteContents = {note}/>
    </div>
  );
}

export default App;
