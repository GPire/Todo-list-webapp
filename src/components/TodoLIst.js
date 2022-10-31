import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todobox from './Todobox';

function TodoLIst() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        if(!todo.text || /^\s*$/.test(todo.text)) {
            return; 
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
        // console.log(todo, ...todos); stampo id e testo
    };

    const updateTodo = (todoId, newValue) => { // aggiornare todo/attività che porto nel todoboxß
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return; 
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );

    }

    const removeTodo = id => { /* rimuovo array che contiene il mio todo
     */
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    };
    
    

    const completeTodo = id => { {/*una volta mandato il submit appariaranno i todo*/ }
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos);
    }


  return (
    <div>
        <h1>Qual'è il programma per Oggi?</h1>
        <TodoForm onSubmit={addTodo}/> 
        {/* al click del bottone aggiungo il mio testo input */}
        <Todobox todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} 
        updateTodo={updateTodo} />

      
    </div>
  );
}

export default TodoLIst;

 