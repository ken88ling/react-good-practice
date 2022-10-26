import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;

    setItems((prevState) => {
      return [...prevState, value];
    });

    inputRef.current.value = "";
  }

  return (
    <div className="App">
      Search{" "}
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
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
