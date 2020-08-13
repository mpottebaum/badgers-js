import { createPlayer, distanceBetween } from './player'

export const createUser = numBadgers => {
    return {
        ...createPlayer(190, 650, 10),
        grenades: Math.ceil(Math.log(numBadgers)) + 2,
        bullets: Math.ceil(Math.sqrt(numBadgers)),
        stamina: 3,
        win: false
    }
}

export const shoot = (user, badgers) => {
    const target = findBestTarget(user, badgers)
    const oddsOfHit = distanceBetween(user, target)
    const random = Math.floor(Math.random() * oddsOfHit)
    if(random === 0) return target
    else return null
}

const findBestTarget = (user, badgers) => {
    const closeBadgers = badgers.filter(badger => distanceBetween(user, badger) < 60)
    if(closeBadgers.length > 1) {
        const badgersInFront = closeBadgers.filter(badger => badger.y - user.y < 0)
        if(badgersInFront) return badgersByDistance(user, badgersInFront)[0]
        const badgersLateral = closeBadgers.filter(badger => badger.y - user.y === 0)
        if(badgersLateral) return badgersByDistance(user, badgersLateral)[0]
        return badgersByDistance(user, closeBadgers)[0]
    } else if(closeBadgers.length === 1) {
        return closeBadgers[0]
    } else {
        return badgersByDistance(user, badgers)[0]
    }
}

const badgersByDistance = (user, badgers) => {
    return badgers.sort((a, b) => distanceBetween(user, a) - distanceBetween(user, b))
}