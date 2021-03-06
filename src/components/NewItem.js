import { useState} from "react"
import NewItemstyles from './NewItem.module.css'

//forma za dodavanje novog to do item-a

const NewItem = ({ onAdd }) => {
    const [text, setText] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (text.length < 1) {
            alert("You didn't type anything. Please add a to do item");
        } else {

            onAdd({ text });
            setText('');
        }
    }

    return (
        <form className={NewItemstyles.form} onSubmit={onSubmit}>
   <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a to-do list" />
            <input type="submit" style={{ backgroundColor: '#5EBEC4', border: 'none', color: 'white' }}  value="Save Item"/>
        </form>
    )
}

export default NewItem
