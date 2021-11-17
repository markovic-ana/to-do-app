import Item from "./Item"

const List = ({todos, onDelete}) => {
    return (
        <div className="list">
            {todos.map((item) => <Item key={item.id} item={item} onDelete={onDelete} />)}
        </div>
    )
}

export default List
