import React from 'react';
import PlantMenu from './components/PlantMenu'
import Garden from './components/Garden/Garden'
import GardenBed from './components/Garden/GardenBed'

const App = () => {
  return(
    <div style={{ height: '100%', width: '100%', overflow: 'hidden', position: 'relative'}}>
        <PlantMenu/>
        <GardenBed/>
    </div>
  )
};

export default App;
