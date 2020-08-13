import React from 'react'

const Dashboard = ({ start, user, numBadgers, points, deadBadgers, selectGrenade, shooting }) => {

    const renderLog = () => {
        if(start) {
            return <p>The badger apocalypse is upon you</p>
        } else if(!user.alive) {
            return <p>You died!</p>
        } else if(selectGrenade === 2) {
            return deadBadgers.length === 1 ?
                    <p>You killed the badger {deadBadgers[0].name}</p>
                    :
                    <p>You killed {deadBadgers.length} badgers</p>
        } else if(shooting === 2) {
            return deadBadgers.length > 0 ?
                <p>You killed the badger {deadBadgers[0].name}</p>
                :
                <p>You missed!</p>
        } else if(user.win) {
            return <p>You escaped the gym!</p>
        } else {
            return null
        }
    }

    return <div>
        {
            start ?
            <div></div>
            :
            <div>
                <p>Level {numBadgers / 2}</p>
                <p>Points: {points}</p>
                <p>Stamina: {user.stamina}</p>
                <p>Grenades: {user.grenades}</p>
                <p>Bullets: {user.bullets}</p>
            </div>
        }
        <div>
            {renderLog()}
        </div>
    </div>
}

export default Dashboard