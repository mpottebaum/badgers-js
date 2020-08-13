import React, { useState } from 'react';
import Court from './components/Court'
import Controls from './components/Controls'
import './App.css';

function App() {

  const [ user, setUser ] = useState({
    x: 190,
    y: 650,
    radius: 10,
    bullets: 3,
    grenades: 3,
    stamina: 3,
    alive: true,
    points: 0
  })

  return (
    <div>
      <Court user={user} />
      <Controls user={user} setUser={setUser} />
    </div>
  );
}

export default App;
