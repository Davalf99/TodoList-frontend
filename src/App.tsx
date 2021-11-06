import React, { useState, useEffect } from 'react';
import api from './api/items';

function App() {

  const [list, setList] = useState([{ _id: '', task: '' }]);
  const [item, setItem] = useState('');

  const fetchItems = async () => {
    try {
      const response = await api.get('/');
      setList(response.data);
    } catch {
      console.log('Error!');
    }
  }

  const postItem = async () => {
    try {
      console.log('API call');
      
      const response = await api.post('/', { item })
      console.log('data: '+response.data);
      
        
      // const items = [...list, response.data];
      // console.log("items: "+ items);
      // setList(items);

      fetchItems();


    } catch {
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
      <input onChange={(event) => setItem(event.target.value)}></input>
      <button onClick={postItem}>Add</button>
      <ul>{list.map((item) => {
        return (<li>{item.task}</li>)
      })}</ul>

    </div>
  );
}

export default App;
