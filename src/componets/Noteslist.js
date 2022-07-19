import Notes from "./Notes";
import Addnewnotes from "./AddNewNotes";

const NotesList = ({noteContents}) => {
    
  
    return(
    <>
    <div className="NotesList">
        {noteContents.map((elements, id)=>{
            console.log('ele',elements);
          return(
            <div className="InduvidualNote" key={id}>
             <Notes contents = {elements}/>  
             </div>
            )
        })}
        <Addnewnotes/>
  
    </div>
    
    </>
    )
};
export default NotesList;
