import make from '../../core/util/make'

const hiddentreasurescarolvisitsaninterestingstore = make.module({
    id: 'hidden-treasures-carol-visits-an-interesting-store',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                        'Carol, a young woman in the enchanting land of Armenia with an insatiable curiosity and a longing for adventure, walked through the streets of Yerevan, not realizing the sheer depth of experience she was to amass. Just by keeping her mind and heart open, Carol embarked on a journey that would forever change her life. As Carol traversed the winding streets of Armenia, she marveled at the beauty that surrounded her—the picturesque landscapes, ancient churches, and the warm smiles of the locals. Each step brought her closer to discovering the hidden treasures that awaited her. As the sun bathed the cobblestone streets in a golden glow, Carol chanced upon a vintage shop nestled in a quiet corner. Drawn by a mysterious pull, she ventured inside. The shop was a treasure trove, filled with ornate boxes and dazzling jewelry that whispered stories of a forgotten time. Intrigued by the exquisite craftsmanship and the secrets held within, Carol was reminded of her own passion for data analysis and comparison. She couldn\'t help but see parallels between the intricate details of the shop\'s offerings and the intricacies of comparing real-world datasets. Driven by her desire to unravel the mysteries of both the shop\'s treasures and the world of data, Carol began a quest of discovery. The wise owner of the shop, an elderly man named Aram, recognized her yearning for knowledge and embraced her as a fellow seeker of hidden truths. Let’s explore five fundamental ideas—feature identification, feature comparison, encoding methods, data representation, and contextual understanding—that provide a relatable framework for comparing real-world datasets in terms of their features and encoding in the context of AI.',
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
                    text: "Feature Identification",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['featureidentification'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Feature Comparison",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['featurecomparison'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Encoding Methods",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['encodingmethods'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Data Representation",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['datarepresentation'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Contextual Understanding",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['contextualunderstanding'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Goodbye Aram!",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['goodbyearam'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'featureidentification',
            convo: [
                {
                    type: 'text',
                    text: `<b>With Aram as her guide, Carol embarked on a journey that intertwined her personal growth and understanding of comparing real-world datasets with the rich cultural heritage of Armenia. Aram shared stories of the ancient civilizations that once thrived in the region, their wisdom passed down through generations.
                    Exploring the vintage thrift shop, Carol browsed through a myriad of unique items. In dataset comparison, features within each dataset are identified. Stepping into the thrift shop, Carol started recognizing different elements like ornate jewelry, intricately designed boxes, accessories, or home decor items. Similarly, in datasets, the relevant attributes or characteristics that describe the data points, such as size, color, material, or style are identified to add to the model's knowledge dataset. 
                    Carol remarked at the quality of the labeling done by Aram of each object in the store. She thought to herself that she could easily envision an AI algorithm being able to scan these objects, and she picked out the features that struck out to her like the size, material, decorative elements, presence of locks or hinges, and overall design style of each ornate box she encountered, as well as the type of jewelry (necklaces, rings, bracelets), the precious metal used (gold, silver, platinum), the presence of gemstones, carat weight, color grade, clarity grade, cut quality, and style. 
                    As Carol immersed herself in the history and traditions of Armenia, she discovered the beauty of exploration and the power of connection. Each ornate box and every piece of jewelry became a window into the past, a glimpse into the lives of those who had come before. Through these treasures, she saw the interconnectedness of people, cultures, and the importance of embracing one's heritage.<\b>`
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
            id: 'featurecomparison',
            convo: [
                {
                    type: 'text',
                    text: 'As Carol embarks on her exploration of the vintage shop, she discovers that each ornate box and piece of jewelry has its unique story to tell. The boxes are adorned with intricate carvings and engravings, each representing a glimpse into Armenia\'s rich cultural heritage. The jewelry, adorned with precious gemstones and crafted with meticulous artistry, carries the whispers of bygone eras.In the vintage thrift shop, encoding methods can be likened to the way items are labeled or tagged in the shop. Aram had formulated a system using different tags or labels to identify the price, date of pawning, and condition of each item. Similarly, encoding methods in datasets refer to the representation of features using numerical values, categorical labels, or textual descriptions. This encoding allows AI algorithms to process and understand the features effectively. Comparing the features of the ornate boxes and jewelry datasets, Carol looked for the similarities and differences between them, including  common features like material composition and design style, as well as unique features specific to each dataset, such as gemstones or locks. The striking variation of fabric quality, patterns, or craftsmanship of clothing items, and the intricacy, material quality, size and visual impact of the ornate boxes and jewelry provided a treasure trove of growth opportunity before Carol as she carefully noticed the features that varied as well as those that did not change within and between each feature set of objects. As she compared features across datasets, she harkened back to the similarities between this process and that of dataset comparison in AI. In dataset comparison, you analyze the similarities and differences in the types of features included, observing how they vary or overlap across datasets. Carol\'s fascination grew with every discovery. She became determined to learn more about the origins and significance of these hidden treasures. Guided by the shop\'s wise owner, a knowledgeable and passionate collector, Carol delved deep into Armenia\'s history and traditions, unearthing tales of love, loss, and resilience.',
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
            id: 'encodingmethods',
            convo: [
                {
                    type: 'text',
                    text: `Carol enters the vintage shop with ornate boxes and jewelry, filled with curiosity and a desire to understand each object's unique attributes. As she examines the items, she notices that they come with different tags, labels, or markings, providing information about their characteristics and history. These tags act as an encoding method, allowing Carol to understand and compare the objects effectively.
                    In dataset comparison, encoding methods serve a similar purpose. Carol encounters a dataset that represents the ornate boxes and jewelry she sees in the shop. Encoding methods in this context refer to the techniques used to represent the features of these objects in a format suitable for AI algorithms to process and analyze.
                    Just as the vintage shop's objects have distinctive qualities, the features in a dataset are encoded in various ways. For instance:`,
                },
            ],
            choices: [
                {
                    text: 'Learn More about Encoding Methods',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['learnmoreaboutencodingmethods'],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            id: 'learnmoreaboutencodingmethods',
            convo: [
                    {
                    type: 'text',
                    text:
                        "<b>Choose a topic to explore</b>",
                    },
                ],
            choices: [
                {
                    text: "Numerical Encoding",
                    logic: [
                    {
                        do: [
                            {
                                type: 'goto',
                                path: ['numericalencoding']
                            },
                        ],
                    },
                ],
                },
                       
                {
                    text: "Categorical Encoding",
                    logic: [
                    {
                        do: [
                            {
                                type: 'goto',
                                path: ['categoricalencoding'],
                            },
                        ],
                    },
                ],
                },
                {
                    text: "Textual Encoding",
                    logic: [
                    {
                        do: [
                            {
                                type: 'goto',
                                path: ['textualencoding'],
                            },
                            ],
                    },
                ],
            },
            {
                    text: "Image Encoding",
                    logic: [
                            {
                                do: [
                                    {
                                        type: 'goto',
                                        path: ['imageencoding'],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: "Go back to Fundamental Ideas of Dataset Comparison",
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
            id: 'numericalencoding',
            convo: [
                {
                    type: 'text',
                    text: `Some features, such as dimensions, weight, or carat weight of jewelry, can be represented as numerical values. Similar to how Carol notes down the precise measurements of a box or the weight of a piece of jewelry, these features are encoded using numerical values in the dataset, allowing for quantitative analysis and comparison.`,
                },
            ],
            choices: [
                {
                    text: 'Learn More About Encoding Methods',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['learnmoreaboutencodingmethods'],
                                },
                            ],
                        },
                    ],
                },
            ],
            },
            {
                id: 'categoricalencoding',
                convo: [
                    {
                        type: 'text',
                        text: ` In the vintage shop, Carol encountered features like the type of material (wood, metal, glass) or the style of design (Victorian, Art Deco). These categorical features are encoded using labels or categories in the dataset. For example, material type could be represented as categorical labels such as "1" for wood, "2" for metal, and "3" for glass. This encoding enables AI algorithms to process and compare the categorical information effectively.
                        `,
                    },
                ],
                choices: [
                    {
                        text: 'Learn More About Encoding Methods',
                        logic: [
                            {
                                do: [
                                    {
                                        type: 'goto',
                                        path: ['learnmoreaboutencodingmethods'],
                                    },
                                ],
                            },
                        ],
                    },
                ],
                },
                {
                    id: 'textualencoding',
                    convo: [
                        {
                            type: 'text',
                            text: `Some objects in the shop had descriptions or inscriptions that provide additional information. Carol took note of these descriptions to better understand the objects' history and significance. Similarly, in datasets, textual features can be encoded using techniques like natural language processing or text embeddings to represent the textual information associated with the objects.
                            `,
                        },
                    ],
                    choices: [
                        {
                            text: 'Learn More About Encoding Methods',
                            logic: [
                                {
                                    do: [
                                        {
                                            type: 'goto',
                                            path: ['learnmoreaboutencodingmethods'],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                    },
                    {
                        id: 'imageencoding',
                        convo: [
                            {
                                type: 'text',
                                text: `Carol encountered a dataset that includes images of the ornate boxes and jewelry. In this case, the encoding method involves converting the visual information into a digital format that AI algorithms can analyze. Techniques like image preprocessing, resizing, or using deep learning models for feature extraction can be applied to encode the visual features in the dataset.
                                `,
                            },
                        ],
                        choices: [
                            {
                                text: 'Learn More About Encoding Methods',
                                logic: [
                                    {
                                        do: [
                                            {
                                                type: 'goto',
                                                path: ['learnmoreaboutencodingmethods'],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                        },
                        {
                            id: 'datarepresentation',
                            convo: [
                                {
                                    type: 'text',
                                    text: 'Carol finds herself immersed in the vintage thrift shop, surrounded by a diverse collection of items such as ornate boxes, clothing, and jewelry. In this metaphor, the various objects represent different types of data and the way they are organized and presented within the shop represents data representation in dataset comparison. For example, clothing items might be hung on racks, accessories might be displayed on shelves, and home decor items might be arranged on tables. Similarly, in datasets, data representation refers to the structure and format of the data, such as tabular data, images, graphs, or text documents. Understanding the data representation aids in comprehending the organization and accessibility of the dataset. As Carol explored the thrift shop, she encountered a ledger where the shop owner keeps track of inventory. In a similar format, in dataset comparison, tabular representation is commonly used, resembling spreadsheets or databases, with rows representing individual data points and columns representing different features. This format allows for structured and organized comparisons, with each object\'s features aligned and easily comparable. She saw some framed pictures or photographs of unique clothing items and jewelry pieces. Data representation in comparison can also involve images, Carol thought. Each data point in the dataset could have an associated image, allowing for visual comparisons and analysis. Image representation is useful when visual features are important for the comparison, such as pattern recognition or image-based analysis. Labels, tags, or written descriptions attached to clothing items or boxes, provided information about their history, origin, or characteristics. In dataset comparison, textual representation is often used to encode features that are expressed through text, enabling text-based analysis, natural language processing, and comparisons. On a wall adorned with interconnected photos, depicting fashion trends or style influences throughout history, Carol understood that graph representation in dataset comparison involves creating relationships and connections between data points. This can be useful when analyzing data with complex relationships, dependencies, or networks, since it allows for comparisons of interconnected features and the exploration of relationships between data points. Just as the thrift shop displayed a mix of items, including clothing, jewelry, and boxes, dataset comparison can involve a combination of different data representations. Hybrid representation allows for diverse types of data to be integrated and compared within a single dataset. For example, a dataset might include a combination of tabular data, images, and textual descriptions, enabling comprehensive analysis and comparisons across different types of features.',
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
                            id: 'contextualunderstanding',
                            convo: [
                                {
                                    type: 'text',
                                    text: 'Contextual understanding refers to Carol\'s comprehension of the historical, cultural, and sentimental significance of the items she encounters. It relates to the understanding of the context in which the objects exist and the insights gained from that understanding. Contextual understanding in dataset comparison involves understanding the time period, the data collection methods used, and any temporal factors influencing the data, which can be essential for accurate comparisons and interpretations. Carol appreciated that the objects embodied different cultural influences, styles, and traditions.Recognizing cultural nuances, preferences, or biases in the data can be crucial for meaningful comparisons, especially in datasets collected from diverse populations or different geographical regions. Carol also relied on her domain-specific knowledge, such as her understanding of fashion trends or historical periods, to appreciate the value and significance of certain items. Similarly, in dataset comparison, contextual understanding requires domain-specific knowledge relevant to the dataset\'s subject matter. Understanding how the objects were sourced, authenticated, or curated adds depth to her understanding. Similarly, in dataset comparison, being aware of the data collection process helps in comprehending any biases, limitations, or potential errors that may influence the features and encoding. This understanding allows for more accurate and informed comparisons. Carol reflects on the potential uses and applications of the vintage items she encounters. She imagines how they can be repurposed, appreciated for their craftsmanship, or integrated into modern fashion. In dataset comparison, contextual understanding involves considering the intended applications of the data. Recognizing the purpose for which the data was collected helps in determining the relevance of features, their encoding methods, and the appropriate comparisons to make based on the intended use of the data. With a renewed sense of purpose, Carol bid farewell to Aram, carrying with her not only the memories of her adventure but also a profound appreciation for the beauty of exploration and the power of connection. She understood that her journey had been about more than just comparing datasets—it had been a journey of self-discovery, one that celebrated the past while forging a path to the future.',
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
            id: 'goodbyearam',
            convo: [
                {
                    type: 'text',
                    text: `As she encountered new datasets on her beautiful journey through Apricot Stone City, she would forever remember the hidden treasures she had discovered, and the lessons learned from comparing the beauty of ornate boxes and jewelry to the intricacies of the world of data. Carol is saying goodbye to Aram! Now test your knowledge before exiting the exciting store.`,
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
                {
                    text: 'Question 2',
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
                    text: 'Question 3',
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
                    text: 'Question 4',
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
                {
                    text: 'Question 5',
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
            id: 'q1',
            convo: [
                {
                    type: 'text',
                    text: `Which of the following best represents the "feature identification" aspect in comparing datasets?`,
                },
            ],
            choices: [
                {
                    text: 'Recognizing the dimensions and weight of the ornate boxes and jewelry.',
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
                    text: 'Sorting the boxes and jewelry based on their design style.',
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
                    text: 'Organizing the boxes and jewelry by material composition.',
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
                    text: 'Evaluating the craftsmanship and intricacy of the jewelry.',
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
                    text: `That\'s correct! Next question: In the vintage thrift shop metaphor, the "encoding methods" can be compared to:`,
                },
            ],
            choices: [
                {
                    text: 'The tags and labels attached to the boxes and jewelry.',
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
                    text: 'The vintage shop owner\'s knowledge of historical fashion trends.',
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
                    text: 'The arrangement and display of items in the shop.',
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
                    text: 'The personal preferences of Carol while exploring the shop.',
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
                    text: `That/'s correct!How does the metaphor of a vintage thrift shop relate to "data representation" in comparing datasets?`,
                },
            ],
            choices: [
                {
                    text: 'The types of ornate boxes in the store.',
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
                    text: 'The arrangement of items in the shop resembling a tabular format.',
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
                {
                    text: 'Carol\'s knowledge of each object\'s historical context from Aram\'s stories.',
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
                    text: 'Aram\'s variety of thrifted objects including boxes, jewelry, clothing and more.',
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
                    text: `That\'s correct! Next question:"Contextual understanding" in comparing datasets can be compared to Carol's understanding of:`,
                },
            ],
            choices: [
                {
                    text: 'Aram\'s pricing strategies for the items.',
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
                    text: 'The cultural influences and historical significance of the objects.',
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
                    text: 'The visual appeal and aesthetic value of the boxes and jewelry.',
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
                    text: 'The shop\'s popularity and customer reviews.',
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
                    text: `That\'s correct! Next question: How does the vintage thrift shop metaphor relate to "feature comparison" in comparing datasets?`,
                },
            ],
            choices: [
                {
                    text: 'The shop\'s collection of items representing different features.',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['minigame'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: 'The vintage shop owner\'s expertise in evaluating item quality.',
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
                    text: 'Carol\'s personal preference for certain types of items.',
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
                    text: 'The shop\'s display of objects based on their age and rarity.',
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
            id: 'minigame',
            convo: [
                {
                    type: 'text',
                    text: `Great job! Now for a game that will help us appreciate the capability of AI to analyze large datasets using feature sets to come to conclusions. 
                    Play at https://quickdraw.withgoogle.com/`,
                },
                {
                    type: 'image',
                    src: 'https://cdn.dribbble.com/users/94569/screenshots/3573285/quick_draw_logo_bannerandfinger-01.png',
                },
            ],
            choices: [
                {
                    text: 'I\'m done!',
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
                    text: `Time to continue the journey`,
                },
            ],
            choices: [
                {
                    text: 'Continue',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: [
                                        'root',
                                        'carol-arrives-at-ASC',
                                        'carol-arrives-at-cascade',
                                        'intro',
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
            
export default hiddentreasurescarolvisitsaninterestingstore
