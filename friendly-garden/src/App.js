import React from 'react';
import PlantMenu from './components/PlantMenu'
import Garden from './components/Garden/Garden'

const App = () => {
  return(
    <div style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative'}}>
        <PlantMenu/>
        <Garden/>
    </div>
  )
};

export default App;
