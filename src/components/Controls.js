import React, { useState } from 'react'
import { createMover } from '../models/player'

const Controls = (
    {
        start,
        user,
        grenade,
        selectGrenade,
        shooting,
        setStart,
        movePlayers,
        tossGrenade,
        setSelectGrenade,
        shootGun,
        endGrenade,
        endGun,
        nextLevel,
        newGame
    }
) => {

    const mover = createMover(3)
    const [ grenadeAngle, setGrenadeAngle ] = useState(0)
    const [ grenadePower, setGrenadePower ] = useState(1)

    const renderControls = () => {
        if(start) {
            return <div>
                <button onClick={() => setStart(false)}>Start Game</button>
            </div>
        } else if(!user.alive) {
            return <div>
                <button onClick={() => newGame()}>New Game</button>
            </div>
        } else if(user.win) {
            return <div>
                <button onClick={() => nextLevel()}>Next Level</button>
            </div>
        } else if(grenade) {
            return <div></div>
        } else if(selectGrenade === 1) {
            return <div>
                <p>Angle: {grenadeAngle}</p>
                <p onClick={() => setGrenadeAngle(0)}>0</p>
                <p onClick={() => setGrenadeAngle(45)}>45</p>
                <p onClick={() => setGrenadeAngle(90)}>90</p>
                <p onClick={() => setGrenadeAngle(135)}>135</p>
                <p onClick={() => setGrenadeAngle(180)}>180</p>
                <p onClick={() => setGrenadeAngle(225)}>225</p>
                <p onClick={() => setGrenadeAngle(270)}>270</p>
                <p onClick={() => setGrenadeAngle(315)}>315</p>
                <p>Power: {grenadePower}</p>
                <p onClick={() => setGrenadePower(1)}>1</p>
                <p onClick={() => setGrenadePower(2)}>2</p>
                <p onClick={() => setGrenadePower(3)}>3</p>
                <button onClick={() => tossGrenade(grenadeAngle, grenadePower)}>Throw</button>
                <button onClick={() => setSelectGrenade(0)}>Cancel</button>
            </div>
        } else if(selectGrenade === 2) {
            return <div>
                <button onClick={() => endGrenade()}>Continue</button>
            </div>
        } else if(shooting === 1) {
            return <div></div>
        } else if(shooting === 2) {
            return <div>
                <button onClick={() => endGun()}>Continue</button>
            </div>
        } else {
            return <div>
                <button onClick={() => movePlayers({...user, ...mover.moveUp(user)})} >Up</button>
                <button onClick={() => movePlayers({...user, ...mover.moveDown(user)})}>Down</button>
                <button onClick={() => movePlayers({...user, ...mover.moveLeft(user)})}>Left</button>
                <button onClick={() => movePlayers({...user, ...mover.moveRight(user)})}>Right</button>
                <button onClick={() => setSelectGrenade(1)} disabled={user.grenades <= 0}>Throw Grenade</button>
                <button onClick={() => shootGun()} disabled={user.bullets <= 0}>Shoot Gun</button>
            </div>
        }
    }

    return <div>
        {renderControls()}
    </div> 
        
}

export default Controls