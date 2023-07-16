import make from '../../core/util/make'

const picksButterbeer = make.module({
    id: 'nuclear-Armageddon',
    submodules: [],
    convoSegments: [
        {
            id: 'TEST123CAT',
            convo: [
                {
                    type: 'text',
                    text: ` THIS IS A TEST - FROM THIS POINT ONWARDS, ITS THE NUCLEAR ARMAGEDDON THIS IS A TEST - pain and fear. You feel, how, suddenly, out of nowhere, in an unexpected, terrible way, your atoms get destroyed and reconstructed in ways you cannot even comprehend… You scream with the pain of a thousand deaths, when…`,
                },
            ],
            choices: [
                {
                    text: '... you hear a meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'meow',
            convo: [
                {
                    type: 'text',
                    text: `What?!`,
                },
            ],
            choices: [
                {
                    text: 'WHAT?!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['you-are-now-a-cat'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'you-are-now-a-cat',
            convo: [
                {
                    type: 'text',
                    text: `Meow. Meow meow meow. Meow. MEOOOOOOOW.`,
                },
            ],
            choices: [
                {
                    text: 'meow body meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['TEST123CAT'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
    ],
})

export default picksButterbeer
