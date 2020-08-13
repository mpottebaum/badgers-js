import React from 'react'

const Controls = ({ user, setUser }) => {
    return <div>
        <button onClick={() => setUser({...user, y: user.y - user.radius})} >Up</button>
        <button onClick={() => setUser({...user, y: user.y + user.radius})}>Down</button>
        <button onClick={() => setUser({...user, x: user.x - user.radius})}>Left</button>
        <button onClick={() => setUser({...user, x: user.x + user.radius})}>Right</button>
    </div>
}

export default Controls