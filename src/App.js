import Header from "./components/Header";
import List from "./components/List";
import NewItem from "./components/NewItem";
import { useState } from "react";
import Footer from "./components/Footer";


function App() {
  const [todos, setTodos] = useState('')

  const addItem = (item) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newItem = { id, ...item }
    setTodos([...todos, newItem])
  }

  const deleteItem = (id => {
    setTodos(todos.filter((item)=>item.id !== id))
  })


  return (
    <div className="container">
      <Header />
      <NewItem onAdd={addItem}/>
      {todos.length > 0 ? (
        <List todos={todos} onDelete={deleteItem}/>) : (
          <p>You don't seem to have anything going on...</p>
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
