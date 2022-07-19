import '../index.css'

import {AiFillDelete  } from 'react-icons/ai';
const Notes = ({contents})=>{
    let {text, date} = contents;
    
    
    return(
    
    <>
    <div className="Notes">
        <p>{text}</p>
        <div className="NotesFooter">
            <p>{date}</p>
            <AiFillDelete className='Deleteicon'/>
        </div>
    </div>
    </>
    )

}

export default Notes;