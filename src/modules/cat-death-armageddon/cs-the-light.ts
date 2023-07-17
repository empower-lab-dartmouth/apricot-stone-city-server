import make from '../../core/util/make'

const theLight = make.module({
    id: 'the-Light',
    submodules: [],
    convoSegments: [
        {
            id: 'you-see-it',
            convo: [
                {
                    type: 'text',
                    text: `As you sit there, thinking and shivering, your mind goes numb, and your heart goes sad. You don't even know the reason of this. It makes absolutely no sense. First you were a human... then you became a cat... then some kind of nuclear attack happened... and now you'll die without anyone knowing any of what happened to you. While in these cavilations, you see a man walk past you, extremely fast, with badge that you could rapidly read said 'Nuclear Research Institute, Pakistan'`,
                },
            ],
            choices: [
                {
                    text: 'Follow the Man',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['find-building'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'Seek for shelter',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['find-building'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'find-building',
            convo: [
                {
                    type: 'text',
                    text: `With a sudden rush of energy, you go walking, looking at the streets and the buildings. Most stuff is destroyed by the initial blast from the bomb. Glass is shattered, trees are ripped apart, some buildings are collapsed. In the middle of the street, you find a crying baby. His mother is nowhere to be seen. You walk past him. Out from the middle of the destruction, a huge building appears. The front sign is destroyed, but you get a good feeling about it. There is some light in the windows, and some people seem to be inside.`,
                },
            ],
            choices: [
                {
                    text: 'Go inside',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['enter-building'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'enter-building',
            convo: [
                {
                    type: 'text',
                    text: `As soon as you enter the building, you find The Man you had previously seen in the street. He seems to be a foreigner, and struggles communicating with the people around him. His accent doesn't help, but you kinda understand something...`,
                },
                {
                    type: 'text',
                    text: '"There has been... a terrible... horrible problem... I am coming from Pakistan... The bombs, nuclear, them belong us. Nuclear explosion coming from Pakistan. Why, you ask... We did not do it. They coming from us, yes, but we did not send them nuclear bombs. I am the in-country coordinator for the Nuclear Research Institute in Pakistan, we handle the creation of our nuclear bombs... But... The launching of the nuclear bombs... That we don\'t decide." "Who decides?" - asks the man who seems to be some politician. "Oh, Great National Atomic Tera-Core Hydrolitic Computer decides... We work with AI, and AI lives in this computer. Computer decides when bombs are sent, and how bombs are sent, and if bombs are sent" "WHAT???!!! HOW IS THAT POSSIBLE" "It is how it is, sir"'

                }
            ],
            choices: [
                {
                    text: '...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['thinking'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'thinking',
            convo: [
                {
                    type: 'text',
                    text: `You barely understand what your kitten ears are hearing. It seems nonsensical, almost like out of a movie. As a former software engineer, you remember the famous predicament...`,
                },
                {
                    type: 'text',
                    text: `"A COMPUTER CAN NEVER BE HELD ACCOUNTABLE

                    THEREFORE A COMPUTER MUST NEVER MAKE A MANAGEMENT DECISION"`,
                },
                {
                    type: 'text',
                    text: `You try to hear and understand even more... "There was error... there was terrible error, it seems like our data, the data we trained our threat recognition system, the data that is fundament for the Great National Atomic Tera-Core Hydrolitic Computer, it was biased. It seems like it was poorly trained with exclusively data from within our nation. We thought we were making it great, including all the relevant data, but we missed... we missed so much. Once we put our new system to work... It detected all foreign communications as threats... It scanned thousands of terabytes of data and concluded that this nation was a threat. So it decided to eliminate it... All because of biased data..."`,
                },
                {
                    type: 'text',
                    text: `Now you think... Damn, some biased data has messed up an entire city. You think about that interesting website (https://www.prolific.co/blog/shocking-ai-bias) where you read about more specific case studies for data bias... Now its all tangible and clear... and horrible...`,
                },
                {
                    type: 'text',
                    text: '"And now... the Great National Atomic Tera-Core Hydrolitic Computer has decided that we haven\'t had enough, that the threat hasn\t been fully eliminated. More nukes are coming... Sir, we have failed... It\'s too late. Look out the window"'
                },
                {
                    type: 'text',
                    text: 'When you look out the window, you see a huge light... it comes closer... and closer... and closer... and then it hits the ground'
                },
                {
                    type: 'image',
                    src: 'https://i.imgur.com/JDQO9s0.jpeg'
                }

            ],
            choices: [
                {
                    text: 'Good bye, my cat friend',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root', '/start'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
    ],
})

export default theLight
