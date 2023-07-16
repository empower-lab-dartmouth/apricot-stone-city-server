/* eslint-disable import/extensions */

import make from '../../core/util/make'

import youBecomeACat from './cs-you-become-a-cat'
import nuclearArmageddon from './cs-nuclear-armageddon'

const catArrivesAtASC = make.module({
    id: 'cat-arrives-at-ASC',
    submodules: [youBecomeACat, nuclearArmageddon],
    convoSegments: [],
})

export default catArrivesAtASC
