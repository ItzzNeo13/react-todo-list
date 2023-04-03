import React, { useState, useRef, useEffect } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type='text'
            placeholder='Edit your task'
            value={input}
            name='text'
            className='task-input edit'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='task-button edit'>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            placeholder='Add a task'
            value={input}
            name='text'
            className='task-input'
            onChange={handleChange}
            ref={inputRef}
          />
          <button className='task-button'>Add Task</button>
        </>
      )}
    </form>
  );
};

export default TodoForm;