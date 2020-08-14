import React from "react";
import { createMover } from '../models/player'

const DPad = ({ user, movePlayers }) => {

    const mover = createMover(3)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 36 45">
            <g data-name="Слой 5">
                <path id='up' onClick={() => movePlayers({...user, ...mover.moveUp(user)})} d="M16.96216,15.42929a1.43492,1.43492,0,0,0,2.0545.002l4.5824-4.689a1.43515,1.43515,0,0,0,.40869-1.00293v-8.7A1.02768,1.02768,0,0,0,22.98.01169H13.02a1.02768,1.02768,0,0,0-1.02771,1.02765V9.74088a1.43505,1.43505,0,0,0,.40674,1.001Z" />
                <path id='left' onClick={() => movePlayers({...user, ...mover.moveLeft(user)})} d="M15.37567,17.13773,10.78125,12.436a1.43492,1.43492,0,0,0-1.02631-.43206H1.02765A1.02763,1.02763,0,0,0,0,13.03159v9.937a1.02764,1.02764,0,0,0,1.02765,1.02765h9.00677a1.43528,1.43528,0,0,0,1.02692-.43262l4.31494-4.42066A1.43491,1.43491,0,0,0,15.37567,17.13773Z" />
                <path id='down' onClick={() => movePlayers({...user, ...mover.moveDown(user)})} d="M19.01477,20.86612a1.435,1.435,0,0,0-2.05072.002l-4.56311,4.66968a1.43478,1.43478,0,0,0-.40869,1.00293v8.42A1.02768,1.02768,0,0,0,13.02,35.98831H22.98a1.02768,1.02768,0,0,0,1.02771-1.02765V26.54227a1.43515,1.43515,0,0,0-.41058-1.00489Z" />
                <path id='right' onClick={() => movePlayers({...user, ...mover.moveRight(user)})} d="M34.97235,12.00394H26.22168a1.435,1.435,0,0,0-1.02631.43206L20.601,17.13773a1.43486,1.43486,0,0,0-.00055,2.00518l4.31494,4.42066a1.435,1.435,0,0,0,1.02686.43262h9.03015A1.02764,1.02764,0,0,0,36,22.96854v-9.937A1.02763,1.02763,0,0,0,34.97235,12.00394Z" />
            </g>
        </svg>
    );
}

export default DPad;

// Game by Vadim Solomakhin from the Noun Project


{/* <div>
                <button onClick={() => movePlayers({...user, ...mover.moveUp(user)})} >Up</button>
                <button onClick={() => movePlayers({...user, ...mover.moveDown(user)})}>Down</button>
                <button onClick={() => movePlayers({...user, ...mover.moveLeft(user)})}>Left</button>
                <button onClick={() => movePlayers({...user, ...mover.moveRight(user)})}>Right</button>
                <button onClick={() => setSelectGrenade(1)} disabled={user.grenades <= 0}>Throw Grenade</button>
                <button onClick={() => shootGun()} disabled={user.bullets <= 0}>Shoot Gun</button>
            </div> */}