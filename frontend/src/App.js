import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Search from './component/Search';

function App() {

  const[word,setWord] =useState('');

  const handleSearchsubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchsubmit}/>
    </div>
  );
}

export default App;
