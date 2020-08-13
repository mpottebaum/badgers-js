import { courtDimensions } from '../constants/index'
import { createPlayer, createMover } from './player'

export const createGrenade = (user, angle, power) => {
    const radius = 6
    return {
        ...createPlayer(user.x, user.y - (user.radius + radius), radius),
        angle: angle,
        power: power
    }
}

export const grenadeMover = grenade => {
    const mover = createMover(grenade.power * 4)
    let newCoordinates
    switch(grenade.angle) {
        case 0:
            newCoordinates = mover.moveUp(grenade)
            if(newCoordinates.y === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 180}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 45:
            newCoordinates = mover.moveUpRight(grenade)
            if(newCoordinates.y === grenade.radius && newCoordinates.x === (courtDimensions.x - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 225}
            } else if(newCoordinates.y === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 135}
            } else if(newCoordinates.x === (courtDimensions.x - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 315}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 90:
            newCoordinates = mover.moveRight(grenade)
            if(newCoordinates.x === (courtDimensions.x - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 270}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 135:
            newCoordinates = mover.moveDownRight(grenade)
            if(newCoordinates.y === (courtDimensions.y - grenade.radius) && newCoordinates.x === (courtDimensions.x - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 315}
            } else if(newCoordinates.y === (courtDimensions.y - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 45}
            } else if(newCoordinates.x === (courtDimensions.x - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 225}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 180:
            newCoordinates = mover.moveDown(grenade)
            if(newCoordinates.y === (courtDimensions.y - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 0}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 225:
            newCoordinates = mover.moveDownLeft(grenade)
            if(newCoordinates.y === (courtDimensions.y - grenade.radius) && newCoordinates.x === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 45}
            } else if(newCoordinates.y === (courtDimensions.y - grenade.radius)) {
                return {...grenade, ...newCoordinates, angle: 315}
            } else if(newCoordinates.x === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 135}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 270:
            newCoordinates = mover.moveLeft(grenade)
            if(newCoordinates.x === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 90}
            } else {
                return {...grenade, ...newCoordinates}
            }
        case 315:
            newCoordinates = mover.moveUpLeft(grenade)
            if(newCoordinates.y === grenade.radius && newCoordinates.x === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 135}
            } else if(newCoordinates.y === grenade.radiu) {
                return {...grenade, ...newCoordinates, angle: 225}
            } else if(newCoordinates.x === grenade.radius) {
                return {...grenade, ...newCoordinates, angle: 45}
            } else {
                return {...grenade, ...newCoordinates}
            }
    }
}