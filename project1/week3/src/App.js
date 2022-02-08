import './App.css';
import { useEffect, useState } from 'react'
import Dogs from "./components/Dogs/Dogs"

function App() {

  const [dogs, setDogs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchDogs();
  }, []);

  function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/20')
      .then(response => response.json())
      .then(data => {
        setDogs([data])
        setLoading(false);
      });
  }


  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Dogs!
      </h1>
      <button className="bg-blue-300" ></button>

      <Dogs dogs={dogs} isLoading={isLoading} />
    </div>
  );
}

export default App;
