import make from '../../core/util/make'

const chatGPTrevolutionizesschool = make.module({
    id: 'chatGPT-revolutionizes-school',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                        'Norman was on his way back from the lovely tour he had just completed around the spacious and beautiful apricot-tree laden courtyards of the Silk Road Hotel when he overheard his favorite word–”AI!” Apparently a mother and her son were having a conversation that revolved around the use of an AI tool called ChatGPT, which had become increasingly popular among students for completing their school assignments. Norman\'s ears perked up as he heard Ethan complain that he no longer had to put in as much mental effort into his assignments due to the A\'s assistance.',
                },
            ],
            choices: [
                {
                    text: 'What next??',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['eavesdropping'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'eavesdropping',
            convo: [
                {
                    type: 'text',
                    text:
                        "Norman discreetly observed the worried expression on his mother's face as she expressed her concerns about the ethical implications of relying too heavily on AI tools like ChatGPT. She emphasized the importance of intellectual growth, critical thinking, and independent problem-solving skills that were integral to a well-rounded education. As Norman continued to eavesdrop, he could sense the tension between Ethan's desire for convenience and his mother's worries about the potential detriment to his educational journey. Deep down, Norman empathized with both perspectives. Intrigued by the ethical questions raised, Norman began to contemplate the implications of relying too heavily on AI tools for academic tasks. He realized that while technology could undoubtedly provide assistance and streamline certain aspects of learning, it should not replace the mental effort and personal growth that comes from tackling challenges independently.",
                },
            ],
            choices: [
                {
                    text: "C\'mon Norman! You\'re the expert, right?",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['joiningtheconversation'],
                                },
                            ],
                        },
                    ],
                },
            ]
        },
        {
            id: 'joiningtheconversation',
            convo: [
                {
                    type: 'text',
                    text: `Inspired by his newfound understanding, Norman decided to approach the duo, respectfully introducing himself and sharing his thoughts on the matter. He acknowledged the convenience of AI tools like ChatGPT but emphasized the importance of balancing their usage with active learning and critical thinking.
                    Norman encouraged Ethan to view ChatGPT as a resource to supplement his learning journey rather than a crutch to rely on entirely. He emphasized the value of taking the time to reflect, engage with the material deeply, and develop his own unique perspective on the subjects he studied.
                    The mother listened attentively to Norman's insights, impressed by his wisdom and maturity. She expressed her gratitude for his perspective and vowed to have a constructive dialogue with Ethan about finding a balance between leveraging technology and putting in genuine mental effort.
                    Norman's chance encounter had not only sparked a meaningful conversation about the ethical implications of relying on AI tools for academic work, but it also reaffirmed his own commitment to personal growth and intellectual development.
                    From that day forward, Norman continued to embrace the wonders of technology, leveraging AI tools as supplements to his learning process. He understood that while these tools could assist in certain aspects, they should never replace the authentic pursuit of knowledge and the growth that comes from wholeheartedly engaging with the subjects he was passionate about.
                    Norman's encounter at the hotel served as a reminder to himself and those around him that the path to wisdom lies not only in the answers provided by technology but also in the questions we ask, the challenges we overcome, and the mental effort we invest in our pursuits.`
                },
            ],
            choices: [
                {
                    text: 'I want to know more!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['article'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'article',
            convo: [
                {
                    type: 'text',
                    text: 'Here is a scholarly article on the various benefits and shortcomings of integration of AI into student life.',
                },
                {
                    type: 'text',
                    text: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8455229/',
                },
            ],
            choices: [
                {
                    text: 'Incredible...',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['root',
                                'norman-arrives-at-ASC',
                                'enteringWorldAware',
                                'whats-going-on',


                            ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
            ],
        },
)
            
export default chatGPTrevolutionizesschool
