import React, {useState} from 'react'

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleChange = e => { // gestisco valore attività
    setInput(e.target.value);
  };

  const handleSubmit = e => { //Gestione di refresh del bottone
    e.preventDefault(); //prevengo default

    props.onSubmit({
      id: Math.floor(Math.random() * 10000), //ottengo id casuale 
      text: input
    });

    setInput(''); // imposto valore input
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Aggiungi un promemoria" 
      value={input} 
      name="text"
      className='todo-input'
      onChange={handleChange}
       />

       <button className='todo-button'>+</button>
    </form>
  )
}

export default TodoForm
