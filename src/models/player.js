import { courtDimensions } from '../constants/index'

export const createPlayer = (x, y, radius) => {
    return {
        x: x,
        y: y,
        radius: radius,
        alive: true
    }
}

export const createMover = spaces => {
    const up = (player, numSpaces) => {
        let newY = player.y - (numSpaces * player.radius)
        if(newY < player.radius) newY = player.radius
        return newY
    }
    const down = (player, numSpaces) => {
        let newY = player.y + (numSpaces * player.radius)
        if(newY > (courtDimensions.y - player.radius)) newY = courtDimensions.y - player.radius
        return newY
    }
    const left = (player, numSpaces) => {
        let newX = player.x - (numSpaces * player.radius)
        if(newX < player.radius) newX = player.radius
        return newX
    }
    const right = (player, numSpaces) => {
        let newX = player.x + (numSpaces * player.radius)
        if(newX > (courtDimensions.x - player.radius)) newX = courtDimensions.x - player.radius
        return newX
    }
    return {
        moveUp: player => {
            return {
                x: player.x,
                y: up(player, spaces)
            }
        },
        moveDown: player => {
            return {
                x: player.x,
                y: down(player, spaces)
            }
        },
        moveLeft: player => {
            return {
                x: left(player, spaces),
                y: player.y
            }
        },
        moveRight: player => {
            return {
                x: right(player, spaces),
                y: player.y
            }
        },
        moveUpRight: player => {
            return {
                x: right(player, spaces / 2),
                y: up(player, spaces / 2)
            }
        },
        moveUpLeft: player => {
            return {
                x: left(player, spaces / 2),
                y: up(player, spaces / 2)
            }
        },
        moveDownRight: player => {
            return {
                x: right(player, spaces / 2),
                y: down(player, spaces / 2)
            }
        },
        moveDownLeft: player => {
            return {
                x: left(player, spaces / 2),
                y: down(player, spaces / 2)
            }
        }
    }
}

export const distanceBetween = (playerA, playerB) => {
    const distanceY = playerB.y - playerA.y
    const distanceX = playerB.x - playerA.x
    return Math.sqrt(distanceY**2 + distanceX**2)
}