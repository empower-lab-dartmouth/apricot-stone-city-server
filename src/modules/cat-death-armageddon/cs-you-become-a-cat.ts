import make from '../../core/util/make'

const youBecomeACat = make.module({
    id: 'you-become-a-cat',
    submodules: [],
    convoSegments: [
        {
            id: 'cat-beginning',
            convo: [
                {
                    type: 'text',
                    text: `A buzzing sound goes through your ears. Your identity is lost in the wind, and your skin shivers with pain and fear. You feel, how, suddenly, out of nowhere, in an unexpected, terrible way, your atoms get destroyed and reconstructed in ways you cannot even comprehend… You scream with the pain of a thousand deaths, when…`,
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
                                    path: ['meow-body-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'meow cat senses meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-senses-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'meow mouse meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-mouse-meow'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'meow-body-meow',
            convo: [
                {
                    type: 'text',
                    text: `As a newly transformed cat, you feel a world of sensations. Your whiskers tingle, your muscles flex, and your soft fur brings comfort. With each tail swish and self-grooming, you embrace the extraordinary adventure of being a cat. MEOWWWWWW.`,
                },
            ],
            choices: [
                {
                    text: 'meow reflect about your body meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-BODY-just-like-computer-science-meow-what-a-coincidence'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'meowwwww!!!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-BODY-just-like-computer-science-meow-what-a-coincidence'],
                                },
                            ],
                        },
                    ],
                }
            ],
        },
        {
            id: 'meow-BODY-just-like-computer-science-meow-what-a-coincidence',
            convo: [
                {
                    type: 'text',
                    text: `"damn this is really interesting, you think…” and then you go and reflect how your cat body has different parts, like your head, legs, and tail. These parts are arranged in a specific way, and they work together to help you move, eat, and play. Similarly, the architecture of a neural network is like the arrangement of different parts called "neurons." Each neuron is like a part of your cat body, and they are connected in a specific way to form a network. Just like your body's structure determines how well you can move and do things, the architecture of a neural network affects its ability to learn and make sense of information.`,
                },
            ],
            choices: [
                {
                    text: 'meow cat senses meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-senses-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'meow mouse meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-mouse-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'damn being a cat is really interesting, but im done with it',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['enough-meow'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'meow-senses-meow',
            convo: [
                {
                    type: 'text',
                    text: `As a newly transformed cat, your senses awaken with wonder. Whiskers tingle, scents dance, sounds amplify, and colors enchant. The world reveals itself in a symphony of scents, as your nose picks up delicate aromas that were once imperceptible. Sounds resonate with a newfound clarity, from the gentle rustle of leaves to the faintest of whispers. Each sensation reveals a vibrant world, seen and felt anew.`,
                },
            ],
            choices: [
                {
                    text: 'meow reflect about your new meow senses',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-SENSES-just-like-computer-science-meow-what-a-coincidence'
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'MEOWWWWWWWWWWWWWW!¡!!!!!??¿¿¿¿',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-SENSES-just-like-computer-science-meow-what-a-coincidence'
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'meow-SENSES-just-like-computer-science-meow-what-a-coincidence',
            convo: [
                {
                    type: 'text',
                    text: `And now you meow reflect… You think of your meow body as having different senses, such as sight, hearing, and smell. These senses help you understand the meow world around you. In a neural network, activation functions act like the senses of the network. They help the network understand and interpret the information it receives. For example, an activation function could be like your sense of sight, allowing the network to "see" patterns in the data. By using different activation functions, the network can have different ways of understanding and reacting to the information it receives.`,
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
                                    path: ['meow-body-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'meow mouse meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-mouse-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'damn being a cat is really interesting, but im done with it',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['enough-meow'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'meow-mouse-meow',
            convo: [
                {
                    type: 'text',
                    text: `As a newly transformed cat, a savage instinct courses through your veins—an insatiable hunger to conquer the toy mouse. Your predatory nature awakens, fueling an intense craving to seize your prey. With unrelenting focus, your eyes fixate on the miniature adversary, pupils dilated, as a hunter's anticipation ignites within. Every sinew in your body coils, poised to unleash a devastating assault. The air crackles with raw intensity as you crouch, muscles coiled like springs, awaiting the perfect moment to strike. Then, in a lightning-fast flurry of fur and fury, you unleash a brutal onslaught, rending the air with teeth and claws, driven by an unstoppable determination to claim victory over the defenseless toy mouse.`,
                },
            ],
            
            choices: [
                {
                    text: 'meow...¿',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-MOUSE-just-like-computer-science-meow-what-a-coincidence'],
                                },
                            ],
                        },
                    ],
                }, 
            ],
        },
        {
            id: 'meow-MOUSE-just-like-computer-science-meow-what-a-coincidence',
            convo: [
                {
                    type: 'text',
                    text: `after having such deep and profound desires, you start imagining that you want to learn how to catch a toy mouse as a cat. You try to catch it, but sometimes you miss. The loss function is like a measure of how far you are from catching the mouse. It tells you how much you need to improve. The optimization algorithm is like a plan you make to catch the mouse better each time. You analyze what went wrong, adjust your strategy, and try again. In a neural network, the loss function measures how well the network is performing its task. The optimization algorithm helps the network adjust its "strategy" by making small changes to its connections (like adjusting your movements) so that it can get better at its task over time.`,
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
                                    path: ['meow-body-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'meow senses meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['meow-senses-meow'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'damn being a cat is really interesting, but im done with it',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['enough-meow'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'enough-meow',
            convo: [
                {
                    type: 'text',
                    text: `Now you reflect upon your learning after being converted into a cat… There are three important aspects to being a cat - and of structure of a neural network.`,
                },
                {
                    type: 'text',
                    text: `First, the architecture consists of multiple parts that all work together. They're all neurons.`,
                },
                {
                    type: 'text',
                    text: `Then, the activation function is like an ability to perceive some information and process it. Just like the senses of your body.`,
                },
                {
                    type: 'text',
                    text: `Finally, loss function and optimization is the process of failing and learning from mistakes that a neural network uses to improve`,
                },
            ],
            
            choices: [
                {
                    text: 'That sounds pretty cool!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['yes-indeed'],
                                },
                            ],
                        },
                    ],
                }, 
                {
                    text: 'That\'s so boring!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['yes-indeed'],
                                },
                            ],
                        },
                    ],
                }, 
                {
                    text: 'meow meow meow meow',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['yes-indeed'],
                                },
                            ],
                        },
                    ],
                }, 
                {
                    text: 'MEEEEEEEOOOWWOOWOWOWOWOWWWW!!!!!!!!!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['yes-indeed'],
                                },
                            ],
                        },
                    ],
                }, 
            ],
        },
        {
            id: 'yes-indeed',
            convo: [
                {
                    type: 'text',
                    text: `Yes… indeed… wait. what's that?!!! why is there a mushroom cloud in the horizon?????!!!!`,
                },
            ],
            choices: [
                {
                    text: 'nuclear armageddon',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'cat-arrives-at-ASC',
                                        'nuclear-Armageddon',
                                        'chaos-bombs',
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
})

export default youBecomeACat
