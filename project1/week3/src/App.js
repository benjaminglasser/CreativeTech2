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
    fetch('https://dog.ceo/api/breeds/image/random/5')
      .then(response => response.json())
      .then(data => {
        setDogs([data])
        setLoading(false);
      });
  }

  const handleClick = (e) => {
    e.preventDefault()
    fetchDogs()
  }

  return (
    <div className="App">
      <h1 className="text-9xl font-bold p-10">
        Dogs!
      </h1>
      <button className="bg-blue-300 p-3 m-3 rounded" onClick={handleClick}>more pups!</button>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 max-w-sm gap-3">
          <Dogs dogs={dogs} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default App;
