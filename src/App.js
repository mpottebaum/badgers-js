import React, { useState } from 'react';
import { createUser } from './models/user'
import { createBadgers, badgersMover, findKillerBadger } from './models/badger'
import { createGrenade, grenadeMover } from './models/grenade'
import Court from './components/Court'
import Controls from './components/Controls'
import './App.css';

function App() {

  const [ numBadgers, setNumBadgers ] = useState(2)
  const [ user, setUser ] = useState(createUser(numBadgers))
  const [ badgers, setBadgers ] = useState(createBadgers(numBadgers))
  const [ grenade, setGrenade ] = useState(null)

  const movePlayers = newUser => {
    const newBadgers = badgersMover(newUser, badgers)
    const killerBadger = findKillerBadger(user, newBadgers)
    if(killerBadger) {
      const updatedBadgers = newBadgers.map(badger => {
        if(badger.name === killerBadger.name) {
          return {...badger, x: newUser.x, y: newUser.y}
        } else return badger
      })
      setUser({...newUser, alive: false})
      setBadgers(updatedBadgers)
    }
    else {
      setUser(newUser)
      setBadgers(newBadgers)
    }
  }

  const nextLevel = () => {
    setUser(createUser(numBadgers + 1))
    setBadgers(createBadgers(numBadgers + 1))
    setNumBadgers(numBadgers + 1)
  }

  const newGame = () => {
    setUser(createUser(2))
    setBadgers(createBadgers(2))
    setNumBadgers(2)
  }

  const tossGrenade = (angle, power) => {
    const firstGrenade = createGrenade(user, angle, power)
    setGrenade(firstGrenade)
    const secondGrenade = grenadeMover(firstGrenade)
    setTimeout(() => setGrenade(secondGrenade), 1000)
    const thirdGrenade = grenadeMover(secondGrenade)
    setTimeout(() => setGrenade(thirdGrenade), 1750)
    const fourthGrenade = grenadeMover(thirdGrenade)
    setTimeout(() => setGrenade(fourthGrenade), 2250)
  }

  return (
    <div>
      <Court user={user} badgers={badgers} grenade={grenade} />
      <Controls
        user={user}
        grenade={grenade}
        movePlayers={movePlayers}
        tossGrenade={tossGrenade}
        nextLevel={nextLevel}
        newGame={newGame}
      />
    </div>
  );
}

export default App;
