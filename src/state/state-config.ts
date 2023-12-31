import { UserInfo, defaultUserInfo } from '../core/models/state/state'

/*
 * Define your state type and initial user state here. This type and const
 * are referenced in ../storyteller-config.ts
 *
 */

export type State = Required<
    UserInfo & {
        // Add custom state fields here
        testValue: number
        hotAndCold: {
            guessesMade: number
            correctAnswer: number
        }
    }
>

export const initialState: State = {
    ...defaultUserInfo,
    hotAndCold: {
        guessesMade: 0,
        correctAnswer: 1,
    },
    testValue: 0,
}
