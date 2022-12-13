import React from 'react';
import "./App.css"
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {orginals,actions} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={orginals} title='Netflix Orginals'/>
      <RowPost url={actions} title='Action' isSmall/>
    </div>
  );
}

export default App;
