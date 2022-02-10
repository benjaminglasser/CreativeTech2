import './App.css';
import { useEffect, useState } from 'react'
import Dogs from "./components/Dogs/Dogs"
import Footer from "./components/Footer/Footer"

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

  const handleClick = (e) => {
    e.preventDefault()
    fetchDogs()
  }

  return (
    <div className="center text-center bg-blue-100">
      <h1 className="text-9xl font-bold p-10">
        Dogs!
      </h1>
      <button className="bg-blue-300 p-3 m-3 mb-8 rounded" onClick={handleClick}>more pups!</button>
      <div className="flex flex-col items-center">
        <div className="leading-none columns-1 gap-y-4  md:columns-3 lg:columns-5 lg:max-w-6xl mx-10">
          <Dogs dogs={dogs} isLoading={isLoading} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
