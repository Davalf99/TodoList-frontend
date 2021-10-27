import React, { useState } from 'react';
import axios from "axios";


const url = "http://localhost:8080/";

function App() {

  const [test, setTest] = useState('test');

    axios.get(url).then((response) => {
      console.log(response.data);
      setTest(response.data)
    });

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{test}</p>
    </div>
  );
}

export default App;
