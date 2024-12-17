"use client";
import React, { useState, useEffect } from "react";
import { BsTrashFill, BsPencilSquare } from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [todo, settodo] = useState(""); // New todo input
  const [todos, settodos] = useState([]); // Todos list
  const [darkMode, setDarkMode] = useState(false); // Dark mode state

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    settodos(savedTodos);

    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode) setDarkMode(savedDarkMode);
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Handle input change
  function change(e) {
    settodo(e.target.value);
  }

  // Add a new todo
  function add_todo() {
    if (todo.trim()) {
      settodos([...todos, { todo, iscompleted: false, isEditing: false }]);
      settodo("");
    }
  }

  // Delete a todo
  function delete_todo(index) {
    const updatedTodos = todos.filter((_, i) => i !== index);
    settodos(updatedTodos);
  }

  // Toggle edit mode
  function toggle_edit(index) {
    const updatedTodos = todos.map((t, i) =>
      i === index ? { ...t, isEditing: !t.isEditing } : t
    );
    settodos(updatedTodos);
  }

  // Save edited todo
  function save_todo(index, newTodo) {
    const updatedTodos = todos.map((t, i) =>
      i === index ? { ...t, todo: newTodo, isEditing: false } : t
    );
    settodos(updatedTodos);
  }

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <section className="w-full ">
        {/* Animated Title */}
        <h1 className="text-violet-700 text-center text-4xl mt-4 dark:text-white">
          <TypeAnimation
            sequence={[
              "The best utility app for todo making",
              2000,
              "The best utility app for words counting",
              2000,
              "The best utility app for text converting",
              2000,
              "The best utility app for space removing",
              2000,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>

        {/* Input Section */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <div className="w-[500px] max-w-full">
            <input
              onChange={change}
              value={todo}
              type="text"
              placeholder="Type your todo..."
              className="block bg-slate-800 w-full placeholder-slate-200 rounded-lg border border-slate-400 px-5 py-2.5 text-slate-200 focus:outline-none focus:border-violet-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <button
            onClick={add_todo}
            className="px-5 p-3 bg-gradient-to-r from-transparent via-slate-700 to-transparent rounded-full border-[0.1vw] border-white border-opacity-40 hover:bg-slate-900"
          >
            SUBMIT
          </button>
        </div>

        {/* Todos List */}
        <h1 className="bg-gradient-to-r from-slate-900 to-transparent my-4 mx-auto text-2xl font-semibold p-2 rounded-lg text-center dark:bg-slate-700">
          YOUR TODOS LIST
        </h1>

        <div className="flex flex-col gap-4 min-h-[41vh] px-4">
          {todos.map((e, index) => (
            <div
              key={index}
              className="p-2 w-full rounded-lg flex items-center justify-between gap-2 flex-wrap border border-transparent hover:border-slate-400 bg-gradient-to-r from-indigo-500 to-purple-600"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={e.iscompleted}
                onChange={() =>
                  settodos(
                    todos.map((t, i) =>
                      i === index ? { ...t, iscompleted: !t.iscompleted } : t
                    )
                  )
                }
              />
              {/* Todo Text */}
              {e.isEditing ? (
                <input
                  type="text"
                  defaultValue={e.todo}
                  onBlur={(event) => save_todo(index, event.target.value)}
                  autoFocus
                  className="bg-white text-black px-2 py-1 rounded"
                />
              ) : (
                <p
                  className={e.iscompleted ? "line-through text-gray-300" : ""}
                >
                  {e.todo}
                </p>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                <BsTrashFill
                  onClick={() => delete_todo(index)}
                  className="cursor-pointer text-xl hover:text-red-400"
                />
                <BsPencilSquare
                  onClick={() => toggle_edit(index)}
                  className="cursor-pointer text-xl hover:text-yellow-400"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
