import React, { useState, useEffect } from 'react';
import api from './api/items';

function App() {

  const [list, setList] = useState(['']);
  const [item, setItem ]= useState(''); 
 
  const fetchItems = async () => {
    try {
      const response = await api.get('/');
      setList(response.data);
    } catch {
      console.log('Error!');
    }
  }

  const postItem = async () =>{
    try{
      const response = await api.post('/',{item});
      const items = [...list, response.data];
      setList(items);
    }catch{
      console.log('Error');
    }
  }

  useEffect(() => {
    fetchItems();   
  }
    , []);

  return (
    <div className="App">
      <h1>Hello World</h1>
      <input onChange={(event)=>setItem(event.target.value)}></input>
      <button onClick={postItem}>Add</button>
      <ul>{list.map((item)=>{
        return(<li>{item}</li>)
      })}</ul>
      
    </div>
  );
}

export default App;
