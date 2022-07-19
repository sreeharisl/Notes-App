import {AiFillDelete  } from 'react-icons/ai';



const Addnewnotes = ()=>{
    

    return(
        <>
        <div className="AddNotesWrapper">
            <textarea className="AddNotesTextArea" rows={8} cols={36} placeholder="Add a note...."></textarea>
            <div className="NotesFooter">
            <p>date</p>
            <AiFillDelete className='Deleteicon'/>
            <button className='AddNewNotesBtn'>Save</button>
        </div>
        </div>
        
        </>
    )

}
export default Addnewnotes;