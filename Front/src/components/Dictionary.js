import React, { useState ,useEffect } from 'react';
import axios from 'axios'; // Import Axios
import { getWords } from "../Actions/wordAction";
import { useDispatch, useSelector } from "react-redux";  
const Dictionary = () => {
   //get news
   const words = useSelector((state) => state.wordReducer.words);
   console.log(words);
 
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(getWords());
   }, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setLoading(true);
    setError('');

    // Replace 'YOUR_API_KEY' with your actual Duden API key
    const apiKey = '8sJ8VdFnBj8ZFZnANogXY9UwAsU7UF3o5oH4NPym';
    const apiUrl = `http://localhost:8080/https://api.duden.de/plus/search/${encodeURIComponent(searchTerm)}`;

    axios
      .get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      })
      .then((response) => {
        if (response.data && response.data[0] && response.data[0].definitions && response.data[0].definitions[0]) {
          setDefinition(response.data[0].definitions[0].text);
        } else {
          setDefinition('Definition not found.');
        }
      })
      .catch((error) => {
        setError('An error occurred while fetching the definition.');
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>German Dictionary</h1>
      <input
        type="text"
        placeholder="Enter a German word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Searching...' : 'Search'}
      </button>
      <div>
        {error && <p>{error}</p>}
        <h2>Definition:</h2>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default Dictionary;
