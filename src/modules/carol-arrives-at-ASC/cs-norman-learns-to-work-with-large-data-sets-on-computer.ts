import make from '../../core/util/make'


const normanLearnsToWorkWithLargeDataSetsOnComputer = make.module({
    id: 'norman-learns-to-work-with-large-data-sets-on-computer',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                        'Norman had always been captivated by the delicate beauty of butterflies. Their vibrant colors, intricate patterns, and graceful fluttering wings enchanted him like nothing else. His fascination drove him to embark on a remarkable journey, one that would lead him into the realm of data analysis.',
                },
                {
                    type: 'text',
                    text:
                        'Norman was determined to uncover hidden secrets about butterflies, to understand their behavior and migration patterns on a deeper level. With his unwavering passion, he sought out a large dataset brimming with information about various butterfly species. It was a treasure trove of scientific observations, encompassing geographical locations, wing patterns, flight durations, and much more.',
                },
                {
                    type: 'text',
                    text:
                        'Equipped with this precious dataset, Norman spent countless hours delving into its depths, seeking patterns and correlations that others might have overlooked. As he meticulously inspected the data, he realized that the dataset contained information spanning decades, collected by numerous scientists and enthusiasts across the globe.',
                },
                {
                    type: 'text',
                    text:
                        'With such a vast dataset in his possession, Norman became aware of the importance of ensuring its accuracy and reliability. He was acutely aware of the potential biases that could skew his analysis, leading to flawed conclusions. Therefore, he embarked on a mission to investigate any imbalances or discrepancies within the data.',
                },
                {
                    type: 'image',
                    src: 'https://images.pexels.com/photos/675313/pexels-photo-675313.jpeg?cs=srgb&dl=pexels-cindy-gustafson-675313.jpg&fm=jpg',
                }
                
            ],
            choices: [
                {
                    text: 'Try using a visualization tool to examine the data',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['visualization-tool'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'how might we do that?',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['visualization-tool'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'visualization-tool',
            convo: [
                {
                    type: 'text',
                    text:
                        `Taking cues from his research background, Norman employed a data visualization tool to aid his quest for truth. He meticulously plotted the butterfly data, utilizing different variables such as gender, age, and species. His goal was to identify any underlying biases that might affect the accuracy and representation of the data.
                        As Norman's visualizations unfolded, patterns and imbalances began to surface. He noticed that certain regions had disproportionately more data points, while others remained sparse. Moreover, the dataset appeared to lack diversity in terms of gender, age, and ethnicity of the scientists who had contributed their observations. Norman realized that such imbalances could lead to skewed results and biased conclusions.
                        Armed with this newfound knowledge, Norman strived to rectify the situation. He initiated collaborations with butterfly enthusiasts from diverse backgrounds, encouraging them to contribute their observations to the dataset. He also worked tirelessly to engage with scientists and organizations worldwide, advocating for a more inclusive and representative collection of butterfly data.
                        Norman's dedication and unwavering passion garnered attention from the scientific community. His efforts not only improved the dataset's representation but also shed light on the importance of diversity in scientific research. Norman's story became an inspiration for others, urging them to critically examine their own datasets for potential biases and to strive for inclusivity in their research endeavors.
                        `,
                },
            ],
            choices: [
                {
                    text: "Test my understanding!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `Would it be a problem for a dataset being using by a machine learning model to classify images as either “butterflies” or “not butterflies” to only have one kind of butterfly?`,
                },
            ],
            choices: [
                {
                    text: 'Yes, because butterflies that look different than the ones included in dataset would be incorrectly classified',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['bias-in-data-minigame'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'That’s not a problem, with enough training examples any data set is sufficien˚t',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q1incorrect',
            convo: [
                {
                    type: 'text',
                    text: `Not quite, try again?`,
                },
            ],
            choices: [
                {
                    text: 'Try again',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q1'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'bias-in-data-minigame',
            convo: [
                {
                    type: 'text',
                    text: `That's correct! To see this concept in practice, try training a classifier that is suppsed to recognize pictures of butterflies.`,
                },
                {
                    type: 'text',
                    text: `See what happens when you don't provide enough training examples, either labelled as posititve or negative, what happens?`
                },
                {
                    type: 'text',
                    text: 'https://guessingai.onrender.com/'
                }
            ],
            choices: [
                {
                    text: 'Done',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['completed'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'completed',
            convo: [
                {
                    type: 'text',
                    text: `Great job! Let’s continue your journey`,
                },
            ],
            choices: [
            ],
        },

    ],
})

export default normanLearnsToWorkWithLargeDataSetsOnComputer
