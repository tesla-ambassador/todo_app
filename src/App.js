import './App.css';
import { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import Todo from './Todo';
import colRef, {q} from './firebase';
import { onSnapshot, addDoc, deleteDoc, serverTimestamp, orderBy } from 'firebase/firestore';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  function addTodo(e) {
    e.preventDefault()
    addDoc(colRef, {
      todo: input,
      timestamp: serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('')
  }

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  return (
    <div className='App'>
      <h1>Hello World</h1>
      <form onSubmit={addTodo} >
        <FormControl>
          <InputLabel>Write Todo</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
        </FormControl>
        <Button type='submit' disabled={!input} variant='outlined' >Add Todo</Button>
      </form>

      <div className='flex justify-center'>
        <ul>
          {todos.map(todo => (
            <Todo text={todo} time={'some time period'} />
          ))} 
        </ul>
      </div>
    </div>
  );
}

export default App;
