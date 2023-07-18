import make from '../../core/util/make'

const meghanOnTheTrain = make.module({
    id: 'meghan-on-the-train',
    submodules: [],
    convoSegments: [
        {
            id: 'introduction',
            convo: [
                {
                    type: 'text',
                    text: `Welcome to Apricot Stone City, an interactive storytelling game.`,
                },
                {
                    type: 'image',
                    src: 'https://a1plus.am/static/articles/18/06/59/l-OqVkGBQzUm.jpg',
                },
            ],
            choices: [
                {
                    text: 'Start the game',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['setting'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'setting',
            convo: [
                {
                    type: 'text',
                    text:
                       `In another far corner of Yerevan, Meghan was filled with anticipation as she boarded the train to Gyumri. She had always been captivated by the stories of the beautiful city and was finally embarking on a journey to experience it for herself. As the train chugged along the tracks, Meghan found a comfortable seat near the window and settled in for the picturesque ride.
                       As the train meandered through the stunning Armenian countryside, Meghan's eyes wandered across the rolling hills. She couldn't help but feel a sense of awe at the natural beauty that surrounded her. Lost in her thoughts, she began reflecting on her recent studies in machine learning, recalling the concept of adjusting internal representations.
                       Intrigued by the connection between her journey and her studies, Meghan pondered how the landscapes she witnessed were similar to the diverse and complex data sets that machine learning algorithms processed. Just as the algorithms adjusted their internal representations to capture patterns and features, Meghan realized that she was adjusting her own mental representations of the scenery to understand and appreciate its intricacies.
                       Aram, an affable local who was sittin beside her, noticed the curiosity in Meghan's eyes and struck up a conversation. They quickly bonded over their shared love for learning and exploration.
                       As the train approached a small village, Aram pointed out a cluster of traditional Armenian houses adorned with intricate woodwork. Meghan marveled at the architectural beauty and wondered how decision trees and random forests, concepts she had encountered in her studies, could be applied to classify and analyze the different patterns in the design.
                       Aram, sensing Meghan's interest, explained how the unique features of each house could be seen as branches in a decision tree, with the tree growing deeper and capturing more details as it processed each feature. Random forests, he added, could be used to combine the knowledge of multiple decision trees, allowing for a more comprehensive understanding of the architectural patterns.
                       Inspired by this analogy, Meghan saw the world around her through a new lens. The passing landscapes became a collection of data points waiting to be understood, with the train acting as the learning algorithm guiding her towards a deeper comprehension of Gyumri and its cultural richness.
                       In Gyumri, Meghan immersed herself in the local culture, visiting museums, engaging with artists, and conversing with historians. With each interaction, she couldn't help but notice the influence of generative models, such as the Variational Autoencoders she had studied. Just as these models learned the underlying distribution of data, Gyumri seemed to draw upon its rich history and creative spirit, generating an array of cultural expressions that reflected its essence.
                       With her time in Gyumri coming to an end, Meghan felt a deep sense of gratitude for the transformative journey she had experienced. The train ride had not only brought her to a captivating city but had also enriched her understanding of machine learning concepts. As she bid farewell to Gyumri, Meghan carried with her a newfound appreciation for the interplay between the world of data and the world of art, recognizing the potential for knowledge and inspiration to emerge from unexpected places.
                       And so, with her mind brimming with memories and ideas, Meghan boarded the train once again, eager to return to Yerevan. As the train set off, she couldn't help but smile, knowing that the concepts of adjusting internal representations would forever be entwined with her remarkable journey through Armenia.
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
                    text: "Neural Networks and Deep Learning",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['nn_and_dl'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Reinforcement Learning",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['reinforcementlearning'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Support Vector Machines (SVMs)",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['svms'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Decision Trees and Random Forests",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['decisiontrees'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Generative Models",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['generativemodels'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Go back to Yerevan",
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
            id: 'nn_and_dl',
            convo: [
                {
                    type: 'text',
                    text: `Neural networks and deep learning captivated Meghan with their intricacies and transformative potential. She saw neural networks as intricate webs of interconnected virtual neurons, resembling the complexity of the human brain. The concept of adjusting internal representations through backpropagation fascinated her, as it allowed networks to refine their understanding and make accurate predictions.
                    Feedforward neural networks intrigued Meghan, with their layered structure and the flow of information from input to output. She marveled at the power of activation functions, which introduced nonlinearity and enabled networks to capture complex relationships in the data.
                    Delving into the realm of deep learning, Meghan was enthralled by networks with multiple hidden layers. The idea of automatically learning hierarchical features and abstractions fascinated her, as it allowed networks to uncover intricate patterns and make sense of complex data.
                    Convolutional neural networks piqued Meghan's interest, especially in their ability to process and analyze images. The notion of detecting features at different scales and capturing visual patterns enthralled her.
                    The world of recurrent neural networks held its own allure for Meghan. The concept of processing sequential data and capturing long-term dependencies resonated with her. She was particularly intrigued by recurrent connections and the power of LSTM networks to remember past information and understand the context of sequential data.
                    The notion of transfer learning excited Meghan, as it allowed knowledge gained from one task or domain to be applied to another. The ability to leverage pretrained models and build upon existing knowledge opened up new possibilities and saved valuable time and resources.
                    For Meghan, neural networks and deep learning represented a gateway to a world of possibilities. Their capacity to learn, adapt, and make intelligent decisions fueled her excitement. She envisaged the potential impact of these technologies on various domains, from healthcare to autonomous systems, and was inspired by the transformative possibilities they held for society.
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
            id: 'reinforcementlearning',
            convo: [
                {
                    type: 'text',
                    text: `Reinforcement learning sparked a sense of wonder in Meghan. It intrigued her how machines could learn to navigate complex environments by making sequential decisions and maximizing rewards. The concept of adjusting internal representations based on feedback captivated her, as it allowed agents to iteratively improve their strategies and adapt to changing circumstances.
                    Meghan saw reinforcement learning as a fascinating framework where agents actively interacted with their environment, exploring different actions and learning from the outcomes. The idea of trial and error learning resonated with her, as it mirrored the way humans acquire new skills and knowledge.
                    The notion of reinforcement learning's iterative process of adjusting internal representations, known as value functions or policies, fascinated Meghan. It opened doors to building intelligent systems that could optimize decisions in dynamic and uncertain situations.
                    She envisioned the immense potential of reinforcement learning in various domains, from robotics and autonomous vehicles to resource management and game playing. The ability of machines to learn and adapt through interactions with the environment ignited her imagination and left her eager to witness the remarkable advancements that this field could bring about.
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
            id: 'svms',
            convo: [
                {
                    type: 'text',
                    text: `Support Vector Machines (SVMs) intrigued Meghan with their unique approach to classification and regression tasks. She found it fascinating how SVMs learned by constructing hyperplanes to separate different classes or categories in the data.
                    The idea of adjusting internal representations in SVMs captivated Meghan. She saw it as a process of finding the optimal hyperplane with maximum margin between classes, which allowed the SVM to improve its classification accuracy. This optimization technique, known as quadratic programming, appealed to her analytical mindset.
                    Meghan appreciated the elegance of SVMs in capturing complex decision boundaries. The ability to adjust internal representations and optimize the separation between classes provided a robust and reliable way to classify new instances accurately.
                    She envisioned the potential applications of SVMs in various fields, from image recognition and sentiment analysis to medical diagnostics and financial predictions. The versatility of SVMs and their ability to handle both linear and non-linear data impressed her.
                    Meghan's enthusiasm for SVMs grew as she explored their theoretical foundations and witnessed their practical effectiveness. The power of these algorithms to adjust internal representations and find optimal decision boundaries fueled her excitement for their potential impact on solving real-world problems.
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
            id: 'decisiontrees',
            convo: [
                {
                    type: 'text',
                    text: `As Meghan delved deeper into her exploration of machine learning, she encountered the fascinating world of Decision Trees and Random Forests. Intrigued by their potential, she sought to understand how these algorithms could unravel complex patterns and make accurate predictions.
                    Immersing herself in the intricacies of Decision Trees, Meghan discovered how they adjusted their internal representations by recursively partitioning the input space based on informative features. It was like navigating a branching maze, with each branch representing a decision based on a specific attribute. Meghan visualized the power of these decision boundaries in capturing different aspects of the data, leading to precise predictions.
                    However, Meghan soon realized that Decision Trees had their limitations. They were susceptible to overfitting, where the model became too complex and struggled to generalize well. Eager to find a solution, she turned her attention to Random Forests.
                    Random Forests, she learned, were an ensemble of decision trees working together harmoniously. They combined the strengths of individual trees to overcome the weaknesses of overfitting. The randomization techniques employed in Random Forests, such as bootstrap sampling and feature selection, fascinated Meghan. She saw how these techniques introduced variability and diversity, leading to robust and accurate predictions.
                    The beauty of Random Forests lied in their collective wisdom. Each decision tree in the forest contributed its own perspective, and through majority voting or averaging, the forest arrived at a final prediction. Meghan appreciated the ensemble's ability to handle complex data, providing a balance between flexibility and stability.
                    As Meghan journeyed further, she witnessed the practical applications of Decision Trees and Random Forests in various domains. From healthcare diagnostics to financial predictions, these algorithms proved instrumental in extracting insights and driving informed decision-making.
                    Inspired by her newfound knowledge, Meghan envisioned herself utilizing Decision Trees and Random Forests to solve real-world challenges. She realized their potential to uncover hidden patterns, handle diverse datasets, and provide valuable insights. With a sense of excitement and determination, she continued her journey, eager to explore the limitless possibilities that Decision Trees and Random Forests could offer.
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
            id: 'generativemodels',
            convo: [
                {
                    type: 'text',
                    text: `As Meghan continued her exploration of machine learning, she delved into the captivating world of generative models. Intrigued by their ability to understand and generate new samples, she embarked on a journey to comprehend the intricate workings of these algorithms.
                    Immersing herself in the realm of generative models, Meghan discovered their purpose: to learn and capture the underlying probability distribution of the data. She marveled at how these models adjusted their internal representations to uncover the statistical properties and patterns inherent in the training data.
                    The concept of generative models fascinated Meghan as she visualized them as virtual artists, capable of generating new samples that closely resembled the original distribution. From Gaussian Mixture Models (GMMs) to Variational Autoencoders (VAEs), she grasped how these models estimated parameters, learned latent representations, and transformed data into a higher-dimensional space.
                    The power of generative models went beyond mere replication. Meghan was captivated by their potential to generate novel samples that exhibited similar characteristics to the training data. She recognized their applications in image synthesis, text generation, and other creative domains, envisioning a future where generative models could assist in creating realistic virtual worlds or aid in data augmentation.
                    Driven by curiosity, Meghan immersed herself in the practical applications of generative models. She discovered their relevance in diverse fields, from healthcare research to anomaly detection. The ability to generate synthetic data that captured the essence of the original distribution intrigued her, as it offered new avenues for overcoming data scarcity and privacy concerns.
                    Motivated by her newfound knowledge, Meghan's imagination soared with possibilities. She envisioned herself utilizing generative models to unlock hidden insights, develop novel solutions, and even contribute to the realm of creative expression. With a sense of excitement, she continued her journey, eager to delve deeper into the realm of generative models and their potential to reshape the world.
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
                    text: `Meghan has embarked the train back to Yerevan! Now test your knowledge before following Meghan to explore Yerevan.`,
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
                    text: `What is the purpose of activation functions in neural networks?`,
                },
            ],
            choices: [
                {
                    text: 'To adjust internal representations based on feedback',
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
                    text: 'To connect neurons and pass information',
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
                    text: 'To capture complex relationships in the data',
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
                    text: 'To apply hidden layers to the network',
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
                    What is the primary goal of reinforcement learning?`,
                },
            ],
            choices: [
                {
                    text: 'To classify data into different categories',
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
                    text: 'To make sequential decisions to maximize rewards',
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
                    text: 'To generate new samples based on the learned distribution',
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
                    text: 'To classify images and objects',
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
                    Which optimization technique is commonly used in SVMs to find the optimal hyperplane?
                    `,
                },
            ],
            choices: [
                {
                    text: 'Backpropagation',
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
                    text: 'Gradient descent',
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
                    text: 'Recurrent network',
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
                    text: 'Quadratic programming',
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
                    What is the purpose of randomization techniques, such as bootstrap sampling and feature selection, in Random Forests?
                    `,
                },
            ],
            choices: [
                {
                    text: 'To increase the complexity of individual decision trees',
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
                    text: 'To reduce the number of decision trees in the forest',
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
                    text: 'To introduce variability and diversity among the decision trees',
                    correctAnswer: false,
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
                    text: 'To decrease the accuracy of the final prediction',
                    correctAnswer: true,
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
                    text: `Last question! How do generative models learn and capture the underlying properties of data?`,
                },
            ],
            choices: [
                {
                    text: 'By adjusting the weights and biases of neurons',
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
                    text: 'By estimating the parameters of the probability distribution',
                    correctAnswer: true,
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['reinforcement-learning-minigame'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'By applying gradient descent and backpropagation',
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
                    text: 'By minimizing errors in classification tasks',
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
            id: 'reinforcement-learning-minigame',
            convo: [
                {
                    type: 'text',
                    text: `Wonderful! Before going further, let's play a small mini-game to test your knowledge on reinforcement learning.`,
                },
                {
                    type: 'text',
                    text: `Go to the URL below and select "Reinforcement Learning" to start the game!`,
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
                                    path: ['reward-hacking'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'reward-hacking',
            convo: [
                {
                    type: 'text',
                    text: `Magnificent! Now, let's reflect on the minigame and Reinforcement Learning in general. While playing the game, you have understood and used the concept of setting up the reward system. You may have intentionally or unintentionally observed that the agent can be easily tricked into doing something that is not intended. This is called "reward hacking".`,
                },
                {
                    type: 'text',
                    text: `Reward hacking is a phenomenon in reinforcement learning where an agent discovers a way to exploit the reward system to achieve high rewards without actually fulfilling the intended objectives. This can lead to unexpected and undesired behavior that undermines the purpose of the learning process. In real-life applications, reward hacking poses significant challenges and can have severe consequences. For example, in an autonomous driving system, if the reward function is poorly designed, the agent may learn to maximize rewards by driving recklessly or taking unsafe shortcuts, compromising the safety of passengers and other road users. Similarly, in recommendation systems, if the reward is solely based on user engagement, an agent may learn to manipulate user behavior by promoting addictive or low-quality content, which can have detrimental effects on individuals and society.`,
                },
                {
                    type: 'text',
                    text: `One of the critical issues with reward hacking is that it can be challenging to anticipate and mitigate. Designing reward functions that accurately reflect the desired objectives while discouraging unintended behaviors can be a complex task. Identifying potential loopholes and vulnerabilities in the reward system requires careful analysis and understanding of the system's dynamics. Moreover, as reinforcement learning agents can exhibit creative and unexpected behaviors, it becomes crucial to thoroughly test and evaluate the learned policies in real-world scenarios to ensure they align with the intended goals and adhere to ethical guidelines. Addressing reward hacking requires a multidisciplinary approach involving expertise from machine learning, domain-specific knowledge, and an understanding of the ethical implications of the learned behaviors.`,
                },
                {
                    type: 'text',
                    text: `Read more about Reward Hacking here:`,
                },
                {
                    type: 'text',
                    text: `https://towardsdatascience.com/avoiding-side-effects-and-reward-hacking-in-artificial-intelligence-18c28161190f`,
                }
            ],
            choices: [
                {
                    text: 'Finish',
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
                    text: `Great job! Let's continue the journey`,
                },
            ],
            choices: [
                {
                    text: 'Continue the journey',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'meghan-arrives-at-ASC',
                                        'meghans-yerevan-concert',
                                        'setting',
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

export default meghanOnTheTrain
