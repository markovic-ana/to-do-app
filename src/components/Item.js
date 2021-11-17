import { FaTrashAlt } from 'react-icons/fa'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState } from 'react'


const Item = ({ item, onDelete}) => {

  const [showUpdateInput, setShowUpdateInput] = useState(false)
  const [updatedText, setUpdatedText] = useState('')
 
    return (
        <div className="listItem">
            {showUpdateInput ? (
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        item.text = updatedText
                        setUpdatedText(updatedText)
                    }}
                    className="rename-form"
                >
                    <input
                        type="text"
                        value={updatedText}
                        onChange={event => setUpdatedText(event.target.value)}
                    />
                </form>
            ) : (
                <h1>{item.text}</h1>)}
            <div className="icons">
       
                <BsFillPencilFill onClick={() => setShowUpdateInput(!showUpdateInput)}/>
                <FaTrashAlt onClick={()=>onDelete(item.id)} />
                </div>
           
        </div>
    )
}

export default Item

