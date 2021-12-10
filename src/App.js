import Header from "./components/Header";
import Items from "./components/Items";
import NewItem from "./components/NewItem";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Details from './screens/Details'

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
    <Router>
      <Switch>
        <Route path="/Details/:id">
        <Details />
        </Route>
              <div className="container">
      <Link to="/">
                <Header />
      </Link>
            <NewItem onAdd={addItem}/>
          {todos.length > 0 ? (
      <Route path="/">
            <Items todos={todos} onDelete={deleteItem}/>
      </Route>) : (
          <p>You don't seem to have anything going on...</p>
        )
      }
        <Footer />
      </div>
      </Switch>
      </Router>
  );
}

export default App;
