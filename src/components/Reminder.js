import { FaTrashAlt } from 'react-icons/fa'
import { BsFillPencilFill } from 'react-icons/bs'

const Reminder = ({item}) => {
    return (
        <div>
            <h3>{item.text}</h3>
       <BsFillPencilFill onClick={() => setShowUpdateInput(!showUpdateInput)} />
                <FaTrashAlt onClick={()=>onDelete(item.id)} />
        </div>
    )
}

export default Reminder
