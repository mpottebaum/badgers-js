import React, { useState } from 'react';
import { createUser, shoot } from './models/user'
import { createBadgers, badgersMover, findKillerBadger } from './models/badger'
import { createGrenade, isExploded, createGun } from './models/weapons'
import Court from './components/Court'
import Controls from './components/Controls'
import './App.css';

function App() {

  const [ numBadgers, setNumBadgers ] = useState(2)

  const [ user, setUser ] = useState(createUser(numBadgers))
  const [ badgers, setBadgers ] = useState(createBadgers(numBadgers))

  const [ grenade, setGrenade ] = useState(null)
  const [ selectGrenade, setSelectGrenade ] = useState(0)

  const [ gun, setGun ] = useState(null)
  const [ shooting, setShooting ] = useState(0)

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
    const { first, second, third, fourth, expFirst, expSecond, expThird } = createGrenade(user, angle, power)
    setGrenade(first)
    setTimeout(() => setGrenade(second), 1000)
    setTimeout(() => setGrenade(third), 1750)
    setTimeout(() => setGrenade(fourth), 2250)
    setTimeout(() => setGrenade(expFirst), 2750)
    setTimeout(() => setGrenade(expSecond), 3250)
    setTimeout(() => setGrenade(expThird), 3750)
    const deadBadgers = badgers.filter(badger => isExploded(badger, expThird))
    const userAlive = !isExploded(user, expThird)
    setTimeout(() => {
      if(deadBadgers) {
        setBadgers(badgers.filter(badger => !isExploded(badger, expThird)))
      }
      setUser({...user, grenades: user.grenades - 1, alive: userAlive})
      setSelectGrenade(2)
      setGrenade(null)
    }, 4250)
  }

  const shootGun = () => {
    setShooting(1)
    setUser({...user, bullets: user.bullets - 1})
    const deadBadger = shoot(user, badgers)

    setTimeout(() => setGun(createGun(user)), 500)
    setTimeout(() => {
      setGun(null)
      if(deadBadger) {
        setBadgers(badgers.filter(badger => badger.id !== deadBadger.id))
      }
    }, 1000)
    setTimeout(() => setShooting(2), 1500)
  }

  return (
    <div>
      <Court user={user} badgers={badgers} grenade={grenade} gun={gun}/>
      <Controls
        user={user}
        grenade={grenade}
        selectGrenade={selectGrenade}
        gun={gun}
        shooting={shooting}
        movePlayers={movePlayers}
        tossGrenade={tossGrenade}
        setSelectGrenade={setSelectGrenade}
        shootGun={shootGun}
        setShooting={setShooting}
        nextLevel={nextLevel}
        newGame={newGame}
      />
    </div>
  );
}

export default App;
