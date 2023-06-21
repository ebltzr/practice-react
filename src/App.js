import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [dogImageUrl, setDogImageUrl] = useState('');
  const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'

  useEffect( () => {
    axios.get(DOG_API_URL)
    .then( (response) => {
        // console.log(response.data.message);
        setDogImageUrl(response.data.message)
    })
    .catch( (error) => {
        console.log('error', error);
    });
  }, []);

  return (
    <div className="App">
      
      <h1>Random Dog Image</h1>
      <img alt="random dog image" src={dogImageUrl}></img>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
