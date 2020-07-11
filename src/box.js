import React, {useEffect, useState} from 'react';
import useDebounce from './use-debounce';

let searchType

function Box(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(
    () => {
      searchType=props.searchType;
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then(results => {
          setIsSearching(false);
          console.log(results.data.results)
          setResults(results.data.results);
        });
      } else{
        setResults([]);
      }
    },
    [debouncedSearchTerm, props.searchType]
  );
return(
<div className="box">
  <input
    placeholder="Search Marvel Comics"
    onChange={e => setSearchTerm(e.target.value)}
    />

    {isSearching && <div>Searching...</div>}

    {results.filter(result=>result.events.available>0).map(result => (
      <div key={result.id}>
      <button onClick={()=> {
        setResults([result])
        props.makeSelection(result)}}>
        <h4>{result.name}</h4>
        <img className="thumbnail"
          alt={`${result.name}`}
          src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
          />
      </button>
      </div>
    ))}
    </div>
  )
}

function searchCharacters(search) {
  const apiKey = 'ddb64a637cccf095183c9ca095824714';
  const queryString = `${searchType}?nameStartsWith=${search}&apikey=${apiKey}`;
  // let r;
  return fetch(
    `https://gateway.marvel.com:443/v1/public/${queryString}`,
    {
      method: 'GET'
    }
  ).then(r => r.json());
}


export default Box
