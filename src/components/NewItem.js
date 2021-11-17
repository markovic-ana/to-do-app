import { useState } from "react"

const NewItem = ({ onAdd }) => {
    
    const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()

        if (text.length<1) {
            alert('Please add a to do item')
        }

        onAdd({ text })
        setText('')
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a to-do item" />
            <input type="submit" style={{ backgroundColor: '#5EBEC4', border: 'none', color: 'white' }}  value="Save Item"/>
        </form>
    )
}

export default NewItem
