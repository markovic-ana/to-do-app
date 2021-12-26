import Item from "./Item"
import Itemsstyles from './Items.module.css'



//sve to do items

const Items = ({ todos, onDelete }) => {


    return (
        <div className={Itemsstyles.list}>
            {todos.map((item) =>
                <Item key={item.id} item={item} onDelete={onDelete} />)}
        </div>
    )
}

export default Items
