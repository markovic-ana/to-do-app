import Item from "./Item"
import Liststyles from './List.module.css'

const List = ({todos, onDelete}) => {
    return (
        <div className={Liststyles.list}>
            {todos.map((item) => <Item key={item.id} item={item} onDelete={onDelete} />)}
        </div>
    )
}

export default List
