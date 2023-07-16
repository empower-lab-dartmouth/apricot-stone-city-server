/* eslint-disable import/extensions */

import make from '../../core/util/make'

import youBecomeACat from './cs-you-become-a-cat'
import nuclearArmageddon from './cs-nuclear-armageddon'
import theLight from './cs-the-light'

const catArrivesAtASC = make.module({
    id: 'cat-arrives-at-ASC',
    submodules: [youBecomeACat, nuclearArmageddon, theLight],
    convoSegments: [],
})

export default catArrivesAtASC
