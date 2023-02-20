import React from 'react';
import Head from './Components/Head';
import Body from './Components/Body';
import '../src/Components/Head.css'
import '../src/Components/Body.css'

function App() {
  return (
    <div className='Container'>
      <Head />
      <Body />
    </div>
  );
}

export default App;
