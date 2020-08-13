import React from 'react'
import { createMover } from '../models/player'

const Controls = ({ user, setUser }) => {

    const mover = createMover(1)

    return <div>
        <button onClick={() => setUser({...user, ...mover.moveUp(user)})} >Up</button>
        <button onClick={() => setUser({...user, ...mover.moveDown(user)})}>Down</button>
        <button onClick={() => setUser({...user, ...mover.moveLeft(user)})}>Left</button>
        <button onClick={() => setUser({...user, ...mover.moveRight(user)})}>Right</button>
    </div>
}

export default Controls