import make from '../../core/util/make'

const liaTestRun = make.module({
    id: 'lia-test-run',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                        'Once aboard the plane heading towards Apricot City, Lia found herself seated next to Carol, a fellow attendee of the Nature of Learning conference. As the plane prepared for landing, Lia eagerly reviewed her learning modules, meticulously crafting her speech for the conference, which would delve into the captivating topic of Nature of Learning, specifically focusing on learning from experience.',
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
                    text: "Significance of experience",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['experience'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Role of machine learning algorithms",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['rolemachine'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "The distinction between types of learning",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['distinction'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "The value of trial and error in reinforcement learning",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['trialanderror'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "The ability of computers to discover solutions in unknown problem domains ",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['unknowndomains'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Go Home",
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
            id: 'experience',
            convo: [
                {
                    type: 'text',
                    text: `Lia, engrossed in her learning modules, reflected on the profound significance of experience in acquiring knowledge. As the plane descended towards Apricot City, she thought back to her own journey of learning and how her experiences had shaped her understanding of the world.
                    From her early years of exploration and discovery, Lia realized that true comprehension often came through personal encounters and hands-on engagement. Whether it was observing the wonders of nature, participating in experiments, or engaging in thought-provoking discussions, she understood that experience played a vital role in deepening her understanding.
                    Lia believed that experience provided a unique opportunity for individuals to actively interact with their environment, make observations, and derive insights. It allowed them to form connections, recognize patterns, and gain a holistic perspective that surpassed the confines of theoretical knowledge.
                    With this realization, Lia was determined to emphasize the importance of experience in her speech at the Nature of Learning conference. She intended to convey the notion that while theoretical frameworks and learning modules were valuable, they were incomplete without the integration of real-world encounters.
                    Lia's personal experiences had not only enhanced her knowledge but also kindled her passion for learning. The excitement of unraveling new discoveries, the lessons learned from mistakes, and the growth that accompanied each experience had shaped her into the curious and knowledgeable individual she was today.
                    As the plane touched down in Apricot City, Lia felt a surge of anticipation. She was ready to share her insights on the significance of experience in acquiring knowledge, hoping to inspire others to embrace the transformative power of experiential learning.
                    Little did she know that her speech would ignite a flame within the attendees, sparking a renewed focus on practical learning and reinforcing the understanding that true wisdom comes not only from books and lectures but from immersing oneself in the world and learning from firsthand encounters.
                    And so, with a heart full of enthusiasm and a mind enriched by experience, Lia embarked on her journey to the Nature of Learning conference, eager to share her belief in the profound significance of experience as a catalyst for acquiring knowledge.
                    '

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
            id: 'rolemachine',
            convo: [
                {
                    type: 'text',
                    text: `As Lia continued her journey to the Nature of Learning conference in Apricot City, she pondered the crucial role of machine learning algorithms in solving reasoning problems. She was intrigued by how these algorithms had revolutionized various fields, from healthcare to finance, by enabling intelligent decision-making and pattern recognition. Sitting next to Carol on the plane, Lia engaged in a lively discussion about the impact of machine learning on problem-solving. They marveled at how these algorithms could analyze vast amounts of data and extract meaningful insights, often surpassing human capabilities.
                    Lia shared her excitement about the conference, where she would delve deeper into the different types of machine learning algorithms and their unique applications. She explained to Carol that supervised learning algorithms, like diligent students, relied on labeled training data to classify and predict outcomes accurately. They would adjust their parameters based on feedback, striving to produce the correct labels and make informed decisions.
                    Unsupervised learning algorithms, on the other hand, were like curious explorers, Carol noted. They could uncover hidden patterns and structures within the data without the need for pre-existing labels. By clustering similar data points together or detecting anomalies, they could help researchers uncover valuable insights and make sense of complex information.
                    Lia further explained that reinforcement learning algorithms were akin to adaptive learners, mimicking the process of trial and error. Through interactions with an environment, they learned optimal decision-making policies that maximized their received reinforcement. These algorithms were particularly useful in sequential decision problems, such as robotics or autonomous systems, where the best action was not known in advance.
                    As the plane began its descent, Lia and Carol exchanged thoughts on the potential and challenges of machine learning algorithms. They discussed the ethical considerations and the need for responsible and unbiased implementation to ensure fair and inclusive decision-making.
                    Arriving at the conference, Lia felt a renewed sense of purpose. She was eager to share her knowledge and insights on the role of machine learning algorithms in solving reasoning problems. She envisioned a future where these algorithms would augment human capabilities, aiding in complex decision-making processes and paving the way for new discoveries and advancements.
                    Lia knew that understanding the various types of machine learning algorithms and their applications was crucial for researchers, engineers, and policymakers to harness their potential effectively. She was determined to contribute to the collective understanding of these algorithms and inspire others to explore their possibilities.`,
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
            id: 'distinction',
            convo: [
                {
                    type: 'text',
                    text: `As Lia prepared for her speech at the Nature of Learning conference in Apricot City, she contemplated the crucial distinction between supervised, unsupervised, and reinforcement learning. She understood that each type of learning algorithm had its own unique characteristics and applications in the realm of artificial intelligence.
                    Lia engaged in deep conversations with experts and attendees at the conference, eagerly learning more about these distinct learning approaches. She discovered that supervised learning algorithms, like guided apprentices, relied on labeled training data to learn from examples and make accurate predictions. These algorithms adjusted their internal parameters to minimize errors and ensure that the predicted outputs aligned with the provided labels. This type of learning was commonly used in tasks such as image recognition, natural language processing, and predictive analytics.
                    Unsupervised learning algorithms, on the other hand, were like detectives searching for hidden patterns in the absence of labels. Lia marveled at how these algorithms had the ability to cluster similar data points together or detect anomalies within datasets. They worked autonomously, without any predefined labels, allowing researchers to gain insights and discover underlying structures within complex data. Unsupervised learning found applications in areas such as customer segmentation, recommendation systems, and data exploration.
                    Lia's fascination grew when she learned about reinforcement learning algorithms. These algorithms, she realized, were akin to determined explorers navigating unfamiliar terrain. They learned through interactions with an environment, receiving feedback in the form of rewards or punishments for their actions. By constantly adapting their decision-making policies based on the reinforcement received, these algorithms aimed to maximize their cumulative rewards over time. Reinforcement learning was commonly employed in scenarios involving sequential decision-making, such as autonomous robots, game-playing, and optimization problems.
                    As Lia delved deeper into the concepts, she realized that the choice of learning algorithm was crucially dependent on the nature of the problem at hand. Supervised learning was ideal when there was a labeled dataset available, unsupervised learning excelled at discovering patterns and structures in unlabeled data, and reinforcement learning was suited for sequential decision-making tasks where optimal actions needed to be learned through trial and error.
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
            id: 'trialanderror',
            convo: [
                {
                    type: 'text',
                    text: `As Lia prepared to deliver her speech at the Nature of Learning conference, she reflected on the inherent value of trial and error in reinforcement learning. She understood that this unique approach allowed machines to learn from their own experiences, paving the way for remarkable problem-solving capabilities.
                    Engaging in discussions with fellow attendees, Lia explored the intricacies of reinforcement learning and its iterative nature. She realized that, unlike supervised or unsupervised learning, which relied on pre-existing knowledge or labeled data, reinforcement learning algorithms ventured into uncharted territory. They embarked on a journey of trial and error, actively interacting with their environment to determine the best course of action.
                    Lia marveled at the resilience and adaptability of reinforcement learning algorithms. They did not rely on explicit instructions or predetermined rules but instead sought to maximize their cumulative reinforcement over time. Through continuous exploration, they discovered strategies and actions that yielded favorable outcomes, gradually refining their decision-making policies.
                    The process, however, was not without challenges. Lia learned that the reliance on trial and error meant that reinforcement learning could be time-consuming and computationally intensive. The algorithms had to explore numerous possibilities, sometimes encountering setbacks and failures along the way. But therein lay the beauty of it—the ability to learn from mistakes and evolve through experience.
                    As Lia delved deeper into the concept of trial and error in reinforcement learning, she recognized its potential for solving complex, dynamic problems. From autonomous driving to robotics and strategic decision-making, reinforcement learning provided a framework for machines to learn from their own experiences and adapt to changing environments.
                    Inspired by the value of trial and error, Lia aimed to emphasize its significance in her speech at the conference. She believed that the ability to learn from mistakes and iterate based on real-world feedback was a powerful tool in the quest for intelligent decision-making.
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
            id: 'unknowndomains',
            convo: [
                {
                    type: 'text',
                    text: `As the plane soared through the skies, Lia continued to delve into the captivating concept of computers' ability to discover solutions in unknown problem domains. She marveled at the immense potential of artificial intelligence to explore uncharted territory and push the boundaries of human knowledge.
                    Sitting beside Carol, Lia engaged in a thought-provoking conversation about the limitless possibilities that awaited them at the Nature of Learning conference. They discussed how computers, armed with powerful learning algorithms, had the capacity to uncover innovative solutions in areas where the optimal actions were unknown.
                    Lia shared her excitement about the conference, where she would emphasize the capacity of computers to navigate unfamiliar problem domains. She explained to Carol that unlike humans who rely on pre-existing knowledge or explicit instructions, computers could venture into unexplored realms and utilize their computational prowess to learn and adapt.
                    The ability of computers to discover solutions in unknown problem domains was particularly evident in the field of machine learning. Lia discussed how unsupervised learning algorithms, in their quest to identify patterns and structures within data, could unveil insights that had previously eluded human understanding. They had the potential to make groundbreaking discoveries and reshape entire industries.
                    Reinforcement learning, Lia noted, was another avenue through which computers excelled at exploring unknown problem domains. By leveraging trial and error, they could navigate complex sequential decision-making tasks, optimizing their actions over time to achieve remarkable results. Through continuous learning from their own experiences, computers could uncover optimal strategies and adapt to dynamic environments.
                    As the plane continued its journey, Lia's enthusiasm grew. She envisioned a future where computers and artificial intelligence would partner with humans in tackling previously insurmountable challenges. They would venture into uncharted territories, discovering solutions, and uncovering knowledge that had remained hidden.
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
                    text: `Lia has landed! Now test your knowledge before following Lia to explore Apricot Stone City`,
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
                
                
            ],
        },
        {
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `What is the concept emphasized by Lia in her speech regarding the acquisition of knowledge?`,
                },
            ],
            choices: [
                {
                    text: 'The significance of experience',
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
                    text: 'The importance of theoretical frameworks  ',
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
                    text: ' The role of supervised learning algorithms  ',
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
                    text: 'The exploration of unknown problem domains',
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
                    Which type of learning algorithm relies on labeled training data to make accurate predictions?`,
                },
            ],
            choices: [
                {
                    text: 'Supervised learning',
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
                    text: 'Unsupervised learning',
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
                    text: 'Reinforcement learning',
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
                    text: 'Trial and error learning',
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
                    text: ` In reinforcement learning, how do algorithms learn to make decisions? `,
                },
            ],
            choices: [
                {
                    text: 'By maximizing the reinforcement received through trial and error ',
                    correctAnswer: true,
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
                    text: 'By discovering patterns and structures in data ',
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
                    text: 'Through the analysis of labeled training data ',
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
                    text: 'By relying on explicit instructions and predefined rules ',
                    correctAnswer: false,
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
                    text: `What is the value of trial and error in reinforcement learning?`,
                },
            ],
            choices: [
                {
                    text: 'It ensures immediate and error-free decision-making.',
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
                    text: 'It eliminates the need for learning from data.',
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
                    text: 'It minimizes the computational complexity of algorithms.',
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
                    text: 'It allows algorithms to learn from their own experiences.',
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
                    text: `Which type of learning algorithm is best suited for discovering optimal solutions in unknown problem domains?`,
                },
            ],
            choices: [
                {
                    text: 'Reinforcement learning',
                    correctAnswer: true,
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
                {
                    text: 'Supervised learning',
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
                    text: 'Unsupervised learning',
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
                    text: 'Trial and error learning',
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
            id: 'completed',
            convo: [
                {
                    type: 'text',
                    text: `Great job! Let’s continue the journey`,
                },
            ],
            choices: [
                {
                    text: 'Land and gather bags at the airport',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'missing-bags',
                                        'miss-bag',
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

export default liaTestRun
