import { createPlayer } from './player'

export const createUser = numBadgers => {
    return {
        ...createPlayer(190, 650, 10),
        bullets: Math.ceil(Math.log(numBadgers)) + 2,
        grenades: Math.ceil(Math.sqrt(numBadgers)),
        stamina: 3,
    }
}