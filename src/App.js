import React, { useState } from 'react';
import { createUser, shoot } from './models/user'
import { createBadgers, badgersMover, findKillerBadger } from './models/badger'
import { createGrenade, isExploded, createGun } from './models/weapons'
import Court from './components/Court'
import Dashboard from './components/Dashboard'
import Controls from './components/Controls'
import './App.css';

function App() {

  const [ start, setStart ] = useState(true)

  const [ numBadgers, setNumBadgers ] = useState(2)
  const [ points, setPoints ] = useState(0)

  const [ user, setUser ] = useState(createUser(numBadgers))
  const [ badgers, setBadgers ] = useState(createBadgers(numBadgers))
  const [ deadBadgers, setDeadBadgers ] = useState([])

  const [ grenade, setGrenade ] = useState(null)
  const [ selectGrenade, setSelectGrenade ] = useState(0)

  const [ gun, setGun ] = useState(null)
  const [ shooting, setShooting ] = useState(0)

  const movePlayers = newUser => {
    const newBadgers = badgersMover(newUser, badgers)
    const killerBadger = findKillerBadger(newUser, newBadgers)
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
    setDeadBadgers([])
    setGrenade(null)
    setSelectGrenade(0)
    setGun(null)
    setShooting(0)

    setPoints(points + (numBadgers * 1000))
    setUser(createUser(numBadgers + 2))
    setBadgers(createBadgers(numBadgers + 2))
    setNumBadgers(numBadgers + 2)
  }

  const newGame = () => {
    setDeadBadgers([])
    setGrenade(null)
    setSelectGrenade(0)
    setGun(null)
    setShooting(0)

    setStart(true)
    setUser(createUser(2))
    setBadgers(createBadgers(2))
    setNumBadgers(2)
  }

  const tossGrenade = (angle, power) => {
    const newUser = {...user, grenades: user.grenades - 1}
    setUser(newUser)
    const { first, second, third, fourth, expFirst, expSecond, expThird } = createGrenade(user, angle, power)
    setGrenade(first)
    setTimeout(() => setGrenade(second), 1000)
    setTimeout(() => setGrenade(third), 1750)
    setTimeout(() => setGrenade(fourth), 2250)
    setTimeout(() => setGrenade(expFirst), 2750)
    setTimeout(() => setGrenade(expSecond), 3250)
    setTimeout(() => setGrenade(expThird), 3750)
    const newDeadBadgers = badgers.filter(badger => isExploded(badger, expThird))
    const userAlive = !isExploded(user, expThird)
    const numDeadBadgers = newDeadBadgers.length
    setTimeout(() => {
      if(numDeadBadgers > 0) {
        setPoints(points + (numDeadBadgers**numDeadBadgers * 300))
        setBadgers(badgers.filter(badger => !isExploded(badger, expThird)))
      }
      setDeadBadgers(newDeadBadgers)
      setUser({...newUser, alive: userAlive})
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
        setPoints(points + 300)
        setDeadBadgers([deadBadger])
        setBadgers(badgers.filter(badger => badger.id !== deadBadger.id))
      }
    }, 1000)
    setTimeout(() => setShooting(2), 1500)
  }
  
  const endGrenade = () => {
    if(badgers.length <= 0) {
      setUser({...user, win: true})
    } else {
      movePlayers(user)
    }
    setSelectGrenade(0)
    setDeadBadgers([])
  }

  const endGun = () => {
    if(badgers.length <= 0) {
      setUser({...user, win: true})
    } else {
      movePlayers(user)
    }
    setShooting(0)
    setDeadBadgers([])
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <Court user={user} badgers={badgers} grenade={grenade} gun={gun}/>
      <Dashboard
        user={user}
        numBadgers={numBadgers}
        points={points}
        deadBadgers={deadBadgers}
        selectGrenade={selectGrenade}
        shooting={shooting}
        start={start}
      />
      <Controls
        start={start}
        user={user}
        grenade={grenade}
        selectGrenade={selectGrenade}
        gun={gun}
        shooting={shooting}
        setStart={setStart}
        movePlayers={movePlayers}
        tossGrenade={tossGrenade}
        setSelectGrenade={setSelectGrenade}
        shootGun={shootGun}
        setShooting={setShooting}
        endGrenade={endGrenade}
        endGun={endGun}
        nextLevel={nextLevel}
        newGame={newGame}
      />
    </div>
  );
}

export default App;
