import React, { useState } from 'react'
import { createMover } from '../models/player'

const Controls = ({ user, grenade, movePlayers, tossGrenade, nextLevel, newGame }) => {

    const mover = createMover(1)
    const [ selectGrenade, setSelectGrenade ] = useState(false)
    const [ grenadeAngle, setGrenadeAngle ] = useState(0)
    const [ grenadePower, setGrenadePower ] = useState(1)

    const renderControls = () => {
        if(!user.alive) {
            return <div>
                <button onClick={() => newGame()}>New Game</button>
            </div>
        } else if(user.win) {
            return <div>
                <button onClick={() => nextLevel()}>Next Level</button>
            </div>
        } else if(grenade) {
            return <div></div>
        } else if(selectGrenade) {
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
            </div>
        } else {
            return <div>
                <button onClick={() => movePlayers({...user, ...mover.moveUp(user)})} >Up</button>
                <button onClick={() => movePlayers({...user, ...mover.moveDown(user)})}>Down</button>
                <button onClick={() => movePlayers({...user, ...mover.moveLeft(user)})}>Left</button>
                <button onClick={() => movePlayers({...user, ...mover.moveRight(user)})}>Right</button>
                <button onClick={() => setSelectGrenade(true)}>Throw Grenade</button>
            </div>
        }
    }

    return renderControls()
}

export default Controls