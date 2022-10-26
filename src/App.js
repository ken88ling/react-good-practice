import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const inputRef = useRef();

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;

    setItems((prevState) => {
      return [...prevState, value];
    });

    setFilterItems((prevState) => {
      return [...prevState, value];
    });

    inputRef.current.value = "";
  }

  function onChange(e) {
    const value = e.target.value;
    setFilterItems(
      items.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    );
  }
  return (
    <div className="App">
      Search <input type="search" onChange={onChange} />
      <br />
      <form onSubmit={onSubmit}>
        New Item : <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>
      <h3>Items : </h3>
      {filterItems.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default App;
