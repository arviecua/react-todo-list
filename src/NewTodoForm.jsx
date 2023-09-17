import { useState } from "react";
export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    onSubmit(newItem);

    // if (newItem.trim() !== "") {
    //   setTodos((currentTodos) => [
    //     ...currentTodos,
    //     {
    //       id: crypto.randomUUID(),
    //       title: newItem,
    //       completed: false,
    //     },
    //   ]);

    setNewItem("");
    //   setMessage("");
    // } else {
    //   setMessage("Please enter a text");
    // }
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        {message && <p>{message}</p>}
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
