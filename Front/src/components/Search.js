import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'; // Import connect
import { getWords } from '../Actions/wordAction'; 

const Search = ({ words, getWords }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Use useEffect to fetch words when the component mounts
  useEffect(() => {
    getWords();
  }, [getWords]);

  return (
    <div>
      <h1>German Dictionary</h1>
      <input
        type="text"
        placeholder="Enter a German word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Display the fetched words */}
      {/* <ul>
        {words.map((word) => (
          <li key={word.id}>{word.word}</li>
        ))}
      </ul> */}
    </div>
  );
};

// Map the Redux state to props
const mapStateToProps = (state) => ({
  words: state.words, // Assuming you have a "words" reducer in your Redux store
});

// Connect the component to Redux
export default connect(mapStateToProps, { getWords })(Search);
