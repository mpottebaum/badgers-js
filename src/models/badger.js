import { createPlayer, createMover } from './player'

const badgerNames = [
    "Balthazar",
    "Betelguese",
    "Bartholomew",
    "Balzac",
    "Blastus",
    "Bartleby",
    "Bloom",
    "Blackbeard",
    "Barnabas",
    "Beelzebub",
    "Baal",
    "Baladan",
    "Beeroth",
    "Behemoth",
    "Benjamin",
    "Bernice",
    "Bezek",
    "Buz",
    "Boanerges",
    "Boson"
]

const createBadger = name => {
    // x: 0-380, y: 0-300
    const x = Math.ceil(Math.random() * 380)
    const y = Math.ceil(Math.random() * 300)
    return {
        ...createPlayer(x, y, 10),
        name: name
    }
}

export const createBadgers = numBadgers => {
    const badgers = []
    for(let i=0; i<numBadgers; i++) {
        const index = Math.floor(Math.random() * badgerNames.length)
        const badger = createBadger(badgerNames[index])
        badgers.push(badger)
    }
    return badgers
}

export const badgersMover = (user, badgers) => {
    return badgers.map(badger => {
        return {
            ...badger,
            ...moveBadger(user, badger)
        }
    })
}

const moveBadger = (user, badger) => {
    const mover = createMover(1)
    const distanceY = badger.y - user.y
    const distanceX = badger.x - user.x

    if(distanceY === 0) {
        if(distanceX > 0) {
            return {...badger, ...mover.moveLeft(badger)}
        } else {
            return {...badger, ...mover.moveRight(badger)}
        }
    } else if(distanceX === 0) {
        if(distanceY > 0) {
            return {...badger, ...mover.moveUp(badger)}
        } else {
            return {...badger, ...mover.moveDown(badger)}
        }
    } else if(distanceY < 0 && distanceX < 0) {
        return {...badger, ...mover.moveDownRight(badger)}
    } else if(distanceY < 0 && distanceX > 0) {
        return {...badger, ...mover.moveDownLeft(badger)}
    } else if(distanceY > 0 && distanceX < 0) {
        return {...badger, ...mover.moveUpRight(badger)}
    } else if(distanceY > 0 && distanceX > 0) {
        return {...badger, ...mover.moveUpLeft(badger)}
    } else {
        return {...badger, ...mover.moveDown(badger)}
    }
}