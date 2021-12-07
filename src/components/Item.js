import { FaTrashAlt } from 'react-icons/fa'
import { BsFillPencilFill } from 'react-icons/bs'
import { useState} from 'react'
import Itemstyles from './Item.module.css'

//pojedinacni to do item
const Item = ({ item, onDelete}) => {

const [showUpdateInput, setShowUpdateInput] = useState('')
    const [updatedText, setUpdatedText] = useState('')

 


    return (
        <div className={Itemstyles.listItem}>
            {showUpdateInput ? (
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        item.text = updatedText
                        setUpdatedText(updatedText)
                    }}
                    className={Itemstyles.rename}
                >
                    <input
                        type="text"
                        value={updatedText}
                        onChange={event => setUpdatedText(event.target.value)}
                    />
                </form>
            ) : (
                <h1>{item.text}</h1>)}
            <div className={Itemstyles.icons}>
       
                <BsFillPencilFill onClick={() => setShowUpdateInput(!showUpdateInput)} />
                <FaTrashAlt onClick={()=>onDelete(item.id)} />
                </div>
           
        </div>
    )
}

export default Item

