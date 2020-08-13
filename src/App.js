import React, { useState } from 'react';
import { createUser } from './models/user'
import { createBadgers } from './models/badger'
import Court from './components/Court'
import Controls from './components/Controls'
import './App.css';

function App() {

  const numBadgers = 2
  const [ user, setUser ] = useState(createUser(numBadgers))
  const [ badgers, setBadgers ] = useState(createBadgers(numBadgers))

  return (
    <div>
      <Court user={user} badgers={badgers} />
      <Controls user={user} setUser={setUser} />
    </div>
  );
}

export default App;
