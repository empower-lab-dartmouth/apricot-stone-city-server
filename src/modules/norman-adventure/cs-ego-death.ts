import make from '../../core/util/make'

const egoDeath = make.module({
    id: 'ego-death',
    submodules: [],
    convoSegments: [
        {
            id: 'drugs',
            convo: [
                {
                    type: 'text',
                    text: `
                    As you sit in the back of the taxi, the anticipation builds within you. Your heart beats faster with every passing moment. The city lights blur into streaks of color, creating a mesmerizing kaleidoscope through the window. With a mix of excitement and nervousness, you reach into your pocket and take out the LSD square. Holding it delicately in your hand, you feel a surge of determination. This is it. As the taxi speeds through the streets of Apricot Stone City, you place the square on your tongue, ready to embark on a mind-altering journey into the unknown.`,
                },
                
            ],
            choices: [
                {
                    text: 'Watch out the window',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['cars'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Close your eyes',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['cars'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'cars',
            convo: [
                {
                    type: 'text',
                    text: `As the LSD takes effect, the world around you begins to shift and transform. You forget about anything you had decided, any thought you had previously had. Your will becomes the one of the world, and the energy, and the love, and the hate around you. The cars and motorcycles on the road seem to come alive, their metal bodies pulsating with energy. Their engines roar with an otherworldly intensity, and you watch in awe as they glide through the streets with ethereal grace. But then, in a sudden twist, flames burst forth from their engines, engulfing the vehicles in a fiery spectacle. The flames dance and flicker, casting an eerie glow on the surroundings. To your amazement, the fire morphs into vibrant shades of green and multicolor, painting the entire scene in a surreal and mesmerizing palette. The once ordinary traffic has now transformed into a dazzling display of elemental beauty, leaving you captivated by the symphony of colors and the surreal dance of flames.`,
                },
            ],
            choices: [
                {
                    text: 'Reflect',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'cars-ai-minigame'
                                    ], 
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Check your phone',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'cars-ai-minigame'
                                    ], 
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'cars-ai-minigame',
            convo: [
                {
                    type: 'text',
                    text: `Your mind cannot stop thinking about that thing you had seen the other day... The thing about AI and cars. Oh, the cars... They're so bright and beautiful... You open your phone and are barely able to comprehend anything. You only think about the cars... How good they work... What if the cars were alive? What if the cars drove themselves??? How can a car define a route, a destination, a path????????? If you want to understand AI in self driving and more, do check the following link: https://www.kongregate.com/games/vashgard/idle-machine-learning`,
                },
            ],
            choices: [
                {
                    text: 'Fixate on a motorcyle',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['vehicle-accident',
                                    ], 
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Check out the cool truck',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'vehicle-accident',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'vehicle-accident',
            convo: [
                {
                    type: 'text',
                    text: `As your senses become heightened by the LSD, your attention fixates on a particular vehicle, its sleek form cutting through the air with a silent grace. Mesmerized by its sleek lines and futuristic aura, you can't help but follow its path with unwavering focus. But then, amidst the chaotic symphony of swirling colors, you witness a nightmare unfold before your eyes. A man dressed in vibrant orange crosses the vehicle's path, unaware of the impending doom. In a heart-stopping moment, the self-driving machine, deceived by its programmed logic, mistakes the man for an inconspicuous traffic cone. Time slows to a treacherous crawl as the vehicle hurtles forward with unstoppable force. The collision is an explosion of horror, an unrestrained burst of violence that sends shockwaves through your very soul. The scene unfolds in excruciating detail, a macabre tableau of shattered bones and crimson despair. Your mind reels from the grim reality that unfolds before you, forever etching a haunting tableau of tragedy and the merciless consequences that arise when technology fails to recognize the fragility of human existence.`,
                },
            ],
            choices: [
                {
                    text: '... no words',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'thinking'
                                    ], 
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Cry',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'thinking'
                                    ], 
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'thinking',
            convo: [
                {
                    type: 'text',
                    text: `Trembling, your mind explodes with emotion, but you shed no tears, against your own expectation. You think about how this was due to a horribly poor dataset, probably. Self-driving vehicles are supposedly prepared to avoid any kind of person, in any kind of clothing, always. But this doesn't seem to be the case in this ocassion. You try to comprehend, and guess that the only reason why this could've happened is that the dataset was not large enough, not good enough, it's horrible. You think about the other cases, when datasets fail, and people die... https://www.nytimes.com/2018/03/19/technology/uber-driverless-fatality.html`,
                },
            ],
            choices: [
                {
                    text: 'Stay silent',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'egodeath'
                                    ], 
                                },
                            ],
                        },
                    ],
                },
                
            ],
        },
        {
            id: 'egodeath',
            convo: [
                {
                    type: 'text',
                    text: `In the wake of witnessing the harrowing demise, your mind unravels, teetering on the edge of sanity. The scene unfolds before your eyes, inflicting a wound that cuts deeper than flesh. The brutal reality of the self-driving vehicle's fatal misjudgment strikes you with an unbearable weight. As the life force drains from the man dressed in orange, your very essence trembles. It is in this agonizing moment that your ego shatters, disintegrating into fragments, consumed by the void of despair. The boundaries that once tethered your identity are torn asunder, leaving you adrift in a vast expanse of existential confusion. This is ego death, a cataclysmic dissolution of self, where the core of your being crumbles and the world loses its coherence. The weight of this heart-wrenching tragedy etches itself indelibly upon your soul, forever altering the landscape of your existence. You are left to navigate a fractured reality, forever haunted by the poignant reminder that life's fragility can unravel in the blink of an eye.`,
                },
            ],
            choices: [
                {
                    text: '...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: 
                                        ['root', '/start'],
                                     
                                },
                            ],
                        },
                    ],
                },
                
            ],
        },
    ],
})

export default egoDeath
