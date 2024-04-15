
import './App.css';
import axios from "axios"
import { useState } from 'react';

function App() {
  const url = "http://localhost:3001";
  const [serverResponse, setServerResponse] = useState();

  function callGet() {
    axios.get(url)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  function callPost() {
    let data = '?lang=c++';
    axios.post(url + data)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  function callPut() {
    let data = '?lang=python&index=0';
    axios.put(url + data)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  function callDelete() {
    axios.delete(url)
      .then((response) => {
        setServerResponse(response.data);
      });
  }

  return (
    <div className="App">
      {serverResponse}
      <button onClick={callGet}>Get</button>
      <button onClick={callPost}>Post</button>
      <button onClick={callPut}>Put</button>
      <button onClick={callDelete}>Delete</button>
    </div>
  );
}

export default App;
