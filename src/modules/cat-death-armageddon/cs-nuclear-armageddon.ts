import make from '../../core/util/make'

const nuclearArmageddon = make.module({
    id: 'nuclear-Armageddon',
    submodules: [],
    convoSegments: [
        {
            id: 'chaos-bombs',
            convo: [
                {
                    type: 'text',
                    text: `You stand paralyzed, wide-eyed, as the world around you crumbles into chaos. The once familiar streets, now consumed by a raging inferno, bear witness to the merciless rain of nuclear bombs. Each explosion tears through your heart, the deafening blasts reverberating in your soul. The air thickens with the acrid scent of destruction, mingling with the anguish that grips your very core. Your whiskers tremble as tears mingle with the ashes, as you watch helplessly, a small feline amidst the apocalyptic symphony of devastation.`,
                },
            ],
            choices: [
                {
                    text: 'you meow, crying loudly',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no-sound'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'you try to talk',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['no-sound'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'no-sound',
            convo: [
                {
                    type: 'text',
                    text: `Despite your best efforts, no sound comes out of your meow throat. Nothing. Not a meow, not a voice, not a bark. You get scared... You think about being a child, crying out loud, about the fireworks and the loud noise they made. But now, years afterwars, you can differentiate real tragedy from just some silly fun. This is not like when you once were a chid. Devastation consumes your city, and you don't know what to do.`,
                },
            ],
            choices: [
                {
                    text: 'Ask for help',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ask-help'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Contemplate the devastation',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['contemplation'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'ask-help',
            convo: [
                {
                    type: 'text',
                    text: `You meow, you try to make someone to understand you, to take them with you, and save you from the atrocities mankind has created, but you're unable to do so. In the profound despair of death, chaos and suffering, nobody seems to care about a mere street cat....`,
                },
            ],
            choices: [
                {
                    text: 'You sit and think...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['contemplation'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'contemplation',
            convo: [
                {
                    type: 'text',
                    text: `You curl up in a quiet corner, reminiscing about the days when you were just a curious, innocent kitten. The fireworks used to scare you, their booming explosions echoing through the night, and you would huddle close to your humans, seeking comfort. Back then, you imagined those fireworks as terrifying nuclear bombs, their brilliant lights and deafening sounds tearing apart your small world.`,
                },
                {
                    type: 'image',
                    src: 'https://i.imgur.com/81nBwID.jpeg'
                },
                {
                    type: 'text',
                    text: `But now, as you sit, a grown cat, watching real-time images of destruction caused by true nuclear bombs, you can differentiate between the two. The parallels strike you deeply. Just as you, through experience, learned to distinguish fireworks from something far more cataclysmic, so too does the machine learning algorithms sift through vast datasets, discerning patterns and uncovering truths that elude our human senses.`,
                },
                {
                    type: 'text',
                    text: `In case you want to understand better this parallel, and comprehend how having new information, enhances our ability to differentiate and label things, (and machine learning uses this same technique), do follow the link down below and play the minigame`,
                },
                {
                    type: 'text',
                    text: `https://learnml.eu/artbot.php`,
                },
            ],
            choices: [
                {
                    text: 'This is a sad... sad, day',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
    ],
})

export default nuclearArmageddon
