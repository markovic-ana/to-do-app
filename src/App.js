import Header from "./components/Header";
import Items from "./components/Items";
import NewItem from "./components/NewItem";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";


function App() {
  const [todos, setTodos] = useState(() => {
  // getting stored value
  const saved = localStorage.getItem("todos");
  const initialValue = JSON.parse(saved);
  return initialValue || "";
});

    useEffect(() => {
  // storing input name
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);



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
        <Items todos={todos} onDelete={deleteItem}/>) : (
          <p>You don't seem to have anything going on...</p>
        )
      }
      <Footer/>
    </div>
  );
}

export default App;
