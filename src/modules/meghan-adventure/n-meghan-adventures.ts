/* eslint-disable import/extensions */

import make from '../../core/util/make'

import meghanOnTheTrain from './cs-on-the-train'
import meghansYerevanConcert from './cs-yerevan-concert'

const meghanArrivesAtASC = make.module({
    id: 'meghan-arrives-at-ASC',
    submodules: [
        meghanOnTheTrain,
        meghansYerevanConcert
    ],
    convoSegments: [],
})

export default meghanArrivesAtASC
