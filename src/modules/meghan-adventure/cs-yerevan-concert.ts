import make from '../../core/util/make'

const meghansYerevanConcert = make.module({
    id: 'meghans-yerevan-concert',
    submodules: [],
    convoSegments: [
        {
            id: 'setting',
            convo: [
                {
                    type: 'text',
                    text:
                       `Meghan is now in Yerevan. She seems to be very busy with… a concert? Is she an artist? Turns out, our favorite Meghan was none other than Meghan Trainor, the famous and reputable pop singer! She is going to have a concert in Yerevan. Now, she’s very busy with organizing the tickets, discussing the venue, and more. As Meghan Trainor found herself immersed in the hectic preparations for her concert in Yerevan, she suddenly realized that she had neglected to work on her setlist—the vital ingredient that could make or break her performance. Determined to find a solution, she remembered the buzz surrounding AI all over the news and social media and decided to explore its potential to help her create an unforgettable concert experience.
                       With the assistance of her tech-savvy team, Meghan embarked on a journey to develop an AI-powered system that would analyze audience preferences and suggest the best setlist. They began by gathering a vast amount of data from various sources, including surveys, social media platforms, and ticket purchase patterns. This diverse dataset would serve as the foundation for training their AI model.
                       Using the concept of supervised learning, Meghan and her team carefully labeled each song in the dataset based on audience response—categorizing them as "popular" or "less popular." They selected a feature set that encompassed factors such as genre, tempo, lyrics, and previous audience ratings. These features would serve as the basis for the AI model to identify patterns and correlations with audience preferences.
                       Next, they employed a sophisticated machine learning algorithm known as a neural network to construct the reasoner. Meghan marveled at the intricate structure of the neural network, envisioning it as a vast interconnected web of musical knowledge. The algorithm began to adjust the weights of the neurons and the outputs of the hidden units through a process called backpropagation, gradually improving its ability to predict song popularity. Meghan and her team closely monitored the training process, ensuring that the model continued to learn and adapt. They employed a cross-validation set to prevent overfitting, allowing them to fine-tune the model's parameters and achieve optimal performance. After the AI reasoner had undergone extensive training, it was time for the ultimate test—a setlist recommendation based on the analysis of the Yerevan concert's specific audience. Meghan eagerly awaited the AI's suggestions, curious to see if the system truly understood her fans' preferences.
                       The AI system meticulously examined the audience data, considering factors such as age demographics, past concert attendance records, and popular trends in Yerevan's music scene. It then presented Meghan with a setlist that showcased a balance of her greatest hits, crowd favorites, and carefully selected new songs that aligned with the audience's preferences. As Meghan reviewed the AI-generated setlist, she couldn't help but be impressed by its comprehensiveness and thoughtful curation. With a newfound sense of confidence, she rehearsed the recommended songs, embracing the synergy between her artistic intuition and the insights provided by the AI system. The day of the concert arrived, and as Meghan took the stage, the energy in the venue was electric. The audience erupted in cheers and anticipation, eager to witness an unforgettable performance. Throughout the concert, Meghan seamlessly transitioned from one AI-inspired song choice to another, delivering a captivating experience that resonated deeply with the crowd. The AI-powered setlist proved to be a resounding success, delighting fans and critics alike. Meghan Trainor had discovered the transformative potential of AI in the realm of music, unlocking new avenues to connect with her audience on a profound level. Inspired by the fusion of technology and artistry, Meghan continued to explore the possibilities of AI in her future endeavors, eager to leverage its capabilities to enhance the concert experience for her fans worldwide. And so, as the final notes echoed through the concert hall, Meghan Trainor stood triumphant, forever grateful for the power of AI to amplify her musical journey.
                       `,
                    },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'choosetopic',
            convo: [
                {
                    type: 'text',
                    text:
                        "Choose a topic to explore",
                },
            ],
            choices: [
                {
                    text: "Supervised Learning",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['supervised_learning'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Neural Networks",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['neural_networks'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Feature Selection",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['feature_selection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Machine Learning Training Process",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ml_training_process'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "AI-Driven Decision Making",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['ai_decision_making'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Start singing!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['gohome'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'supervised_learning',
            convo: [
                {
                    type: 'text',
                    text: `Supervised learning plays a crucial role in Meghan Trainor's quest to create an AI-powered system for her concert setlist. By utilizing supervised learning, Meghan and her team train their model to predict which songs will be the most popular among her audience.
                    In this scenario, the team gathers a vast dataset of labeled songs that were previously performed during Meghan's concerts. Each song in the dataset is associated with a label indicating its popularity rating based on audience response. The model then learns from this labeled data, discerning the patterns and features that contribute to a song's popularity.
                    Through the process of supervised learning, the model adjusts its internal parameters to minimize the difference between its predicted popularity ratings and the true ratings provided in the dataset. By doing so, it becomes capable of generalizing from the labeled examples and making accurate predictions on new, unseen songs.                    
                    `,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'neural_networks',
            convo: [
                {
                    type: 'text',
                    text: `Neural networks play a significant role in Meghan Trainor's pursuit of creating an AI-powered system for her concert setlist. A neural network is a type of machine learning algorithm inspired by the structure and function of the human brain. In Meghan's case, the neural network is used to construct the AI reasoner responsible for analyzing audience preferences and suggesting the best setlist.
                    The neural network consists of interconnected nodes called neurons, organized in layers. Each neuron receives input data, processes it, and produces an output. The connections between neurons are weighted, representing the strength of their influence on the information flow. Through a process called backpropagation, the neural network adjusts these weights during training to optimize its predictions.
                    As Meghan's team trains the neural network, the model gradually refines its internal parameters, such as the weights and biases of the neurons. This adjustment is driven by the comparison of the model's predicted outputs to the true labels provided in the training data. The backpropagation algorithm calculates the error between the predictions and the labels, propagating it backward through the network to update the weights and improve the model's performance.                    
                    `,
                }
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        }, 
        {
            id: 'feature_selection',
            convo: [
                {
                    type: 'text',
                    text: `Feature selection is a crucial aspect of Meghan Trainor's endeavor to create an AI-powered system for her concert setlist. In the context of machine learning, feature selection involves choosing the most relevant and informative features from the available data to train the AI model effectively.
                    Meghan and her team carefully consider a range of factors when selecting the features for their AI model. These factors include genre, tempo, lyrics, and previous audience ratings. By incorporating these features into the model, they aim to capture the essence of audience preferences and identify patterns that contribute to a song's popularity.
                    The process of feature selection is essential because not all available features may be relevant or provide meaningful insights. Selecting the right features helps reduce noise in the data, improve the model's performance, and avoid overfitting—where the model becomes too specific to the training data and fails to generalize well to unseen instances.
                    `,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ml_training_process',
            convo: [
                {
                    type: 'text',
                    text: `The training process of machine learning plays a critical role in Meghan Trainor's pursuit of creating an AI-powered system for her concert setlist. This process involves iterative steps to train the AI model effectively and improve its predictive capabilities.
                    Meghan and her team closely monitor the training process, ensuring that the model progressively learns from the labeled data. They utilize a cross-validation set to assess the model's performance and prevent overfitting. Cross-validation involves splitting the training data into subsets, training the model on a portion of the data, and evaluating its performance on the remaining data. This helps gauge how well the model generalizes to unseen instances.
                    During training, the model's parameters are adjusted based on a chosen learning algorithm. This algorithm iteratively updates the model's internal representations, such as weights and biases in neural networks, to minimize the discrepancy between the predicted outputs and the true labels. The training process continues until the model achieves the desired level of accuracy or convergence.                    
                    `,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'ai_decision_making',
            convo: [
                {
                    type: 'text',
                    text: `AI-driven decision making plays a pivotal role in Meghan Trainor's mission to create an exceptional concert experience. By leveraging AI technologies, Meghan aims to enhance her decision-making process, leveraging insights derived from data analysis to inform her choices.
                    In the story, Meghan and her team utilize AI algorithms to analyze vast amounts of audience data, including demographic information, past concert attendance records, and popular music trends in Yerevan. By considering these factors, the AI system generates recommendations for the setlist that align with the preferences and interests of the concert attendees.
                    AI-driven decision making empowers Meghan to make more informed choices regarding the songs to include in her setlist. By harnessing the power of data analysis and machine learning, she gains valuable insights into her audience's preferences, enabling her to curate a memorable concert experience that resonates with the crowd.
                    `,
                },
            ],
            choices: [
                {
                    text: 'Dive into a topic',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['choosetopic'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'gohome',
            convo: [
                {
                    type: 'text',
                    text: `Meghan is now preparing to enter the stage! Now test your knowledge before enjoying Meghan’s big concert.`,
                },
            ],
            choices: [
                {
                    text: 'Question 1',
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
                // {
                //     text: 'Question 2',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q2'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 3',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q3'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 4',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q4'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
                // {
                //     text: 'Question 5',
                //     logic: [
                //         {
                //             do: [
                //                 {
                //                     type: 'goto',
                //                     path: ['q5'],
                //                 },
                //             ],
                //         },
                //     ],
                // },
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `What is the main objective of supervised learning in the context of Meghan Trainor's concert setlist creation?`,
                },
            ],
            choices: [
                {
                    text: 'To generate new songs for the concert',
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
                {
                    text: 'To identify the musical genre of each song',
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
                {
                    text: 'To predict the popularity of songs among the audience',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To analyze audience demographics at the concert',
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
            id: 'q2',
            convo: [
                {
                    type: 'text',
                    text: `That's correct! Next question:
                    What is the role of backpropagation in training a neural network?`,
                },
            ],
            choices: [
                {
                    text: 'To initialize the weights of the neural network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To calculate the error between predicted outputs and true labels',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To propagate the input data through the layers of the network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To select the optimal architecture for the neural network',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q2incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q2incorrect',
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
                                    path: ['q2'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q3',
            convo: [
                {
                    type: 'text',
                    text: `That\'s most certainly the correct answer! Next question:
                    Why is feature selection important in machine learning?
                    `,
                },
            ],
            choices: [
                {
                    text: 'To increase the complexity of the AI model',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To reduce the training time of the AI model',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To ensure the AI model can handle any type of data',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q3incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To choose the most relevant and informative features',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q3incorrect',
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
                                    path: ['q3'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        
        {
            id: 'q4',
            convo: [
                {
                    type: 'text',
                    text: `That\'s fantastic! Next question:
                    What is the purpose of using cross-validation in the machine learning training process?
                    `,
                },
            ],
            choices: [
                {
                    text: 'To assess the performance of the model on unseen data',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To choose the optimal learning algorithm for the model',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To prevent overfitting and improve generalization',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'To initialize the parameters of the AI model',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q4incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q4incorrect',
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
                                    path: ['q4'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        {
            id: 'q5',
            convo: [
                {
                    type: 'text',
                    text: `Last question! How does AI-driven decision making enhance Meghan Trainor's concert planning?`,
                },
            ],
            choices: [
                {
                    text: 'By automating the entire concert organization process',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'By providing data-driven insights to inform decision making',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['supervised-learning-minigame'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'By replacing human decision makers with AI algorithms',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'By eliminating the need for audience feedback',
                    correctAnswer: false,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['q5incorrect'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'q5incorrect',
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
                                    path: ['q5'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'supervised-learning-minigame',
            convo: [
                {
                    type: 'text',
                    text: `Wonderful! Before going further, let's play a small mini-game again to test your knowledge on supervised learning!`,
                },
                {
                    type: 'text',
                    text: `You may remember the minigame we played while Meghan was on the Train. Now, go to the smae URL below and select "Supervised Learning" instead to start the other part of the minigame!`,
                },
                {
                    type: 'text',
                    text: `https://learnml.eu/artbot.php`,
                }
            ],
            choices: [
                {
                    text: 'Finish the minigame',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['potential-bias'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'potential-bias',
            convo: [
                {
                    type: 'text',
                    text: `Astonishing! It's important to talk about ethical issues when it comes to Supervised Learning and all other AI training approaches. One AI ethical issue that can be observed in the context of the story is the potential bias in feature selection. When choosing features to train the AI model for setlist creation, there is a risk of inadvertently introducing bias into the system. If the selected features disproportionately favor certain genres, demographics, or cultural preferences, it may result in a biased representation of the audience's preferences. This could lead to an unfair or skewed setlist recommendation, favoring certain groups over others.`,
                },
                {
                    type: 'text',
                    text: `This bias can have significant implications, as it may lead to the exclusion or underrepresentation of certain artists or genres that may be equally deserving of consideration. It can perpetuate existing inequalities in the music industry and limit the diversity and inclusivity of the concert experience. Addressing this ethical issue requires careful consideration and proactive steps to mitigate bias in feature selection. It involves ensuring that the features chosen represent a wide range of genres, artists, and cultural influences, promoting a fair and inclusive representation of audience preferences.`,
                },
                {
                    type: 'text',
                    text: `Additionally, ongoing monitoring and evaluation of the AI system's performance and recommendations are necessary to detect and address any biases that may emerge over time. By implementing mechanisms for transparency, accountability, and regular review, it becomes possible to mitigate bias and promote a more equitable and inclusive AI-driven decision-making process.

                    Overall, recognizing and addressing bias in feature selection is crucial for AI systems to make fair and unbiased decisions, fostering inclusivity and equal opportunities in domains such as concert setlist creation.`,
                }
            ],
            choices: [
                {
                    text: 'Got it! Let\'s continue',
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
                    text: `Great job! Let's end the journey`,
                },
            ],
            choices: [
                {
                    text: 'End the journey',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'hot-and-cold-minigame',
                                        'game-ends',
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

export default meghansYerevanConcert
