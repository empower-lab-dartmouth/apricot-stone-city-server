/* eslint-disable import/extensions */

import make from '../../core/util/make'

import meghanOnTheTrain from './cs-on-the-train'

const meghanArrivesAtASC = make.module({
    id: 'meghan-arrives-at-ASC',
    submodules: [meghanOnTheTrain],
    convoSegments: [],
})

export default meghanArrivesAtASC
