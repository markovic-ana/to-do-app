import Header from "./components/Header";
import Items from "./components/Items";
import NewItem from "./components/NewItem";
import Footer from "./components/Footer";
import {Link, Outlet} from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";


function App() {

  const [todos, setTodos] = useLocalStorage("todos", []);
  
  const addItem = (item) => {
    const id = Math.random().toString(36).substr(2, 5);
    const newItem = { id, ...item };
    setTodos([...todos, newItem]);
  }

  const deleteItem = (id => {
    setTodos(todos.filter((item)=>item.id !== id))
  })
  

  return (
  
              <div className="container">
      <Link to="/">
        <Header />
      </Link>
      <NewItem onAdd={addItem} />
          
          {todos.length > 0 ?
        (<Items todos={todos} onDelete={deleteItem} />)
       : (
          <p>You don't seem to have anything going on...</p>
        )
      }
    <Outlet/>
      <Footer />
      </div>
  );
}

export default App;
