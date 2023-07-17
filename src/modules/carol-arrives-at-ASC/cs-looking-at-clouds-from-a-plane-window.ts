import make from '../../core/util/make'

const lookingAtClouds = make.module({
    id: 'looking-at-clouds-from-a-plane-window',
    submodules: [],
    convoSegments: [
        {
            id: 'opening',
            convo: [
                {
                    type: 'text',
                    text:
                       `After Carol\'s flight and her metaphorical journey through AI concepts, she found herself intrigued by the topic of data preprocessing. As she delved deeper into the realm of artificial intelligence, Carol realized that data preprocessing played a crucial role in the success of machine learning models.\nData preprocessing involves transforming raw data into a format that is suitable for analysis and modeling. It includes a series of steps such as data cleaning, data transformation, feature scaling, and handling missing values. These steps are essential to ensure that the data is in a consistent and usable form for training and evaluating machine learning models.\nCarol began to explore the significance of data cleaning. She learned that real-world datasets are often messy and contain errors, outliers, or inconsistencies. Data cleaning involves tasks such as removing duplicate entries, correcting errors, dealing with missing values, and handling outliers to ensure the quality and reliability of the data.\nNext, Carol discovered the importance of data transformation. Different machine learning algorithms have different requirements regarding the distribution and scale of the data. Therefore, data transformation techniques such as normalization, standardization, or log transformation are used to make the data conform to these requirements. Carol realized that these transformations could greatly impact the performance and accuracy of the models.\nFeature scaling was another crucial aspect of data preprocessing that caught Carol\'s attention. Many machine learning algorithms are sensitive to the scale of the input features. Therefore, it is often necessary to scale the features to a similar range. Common techniques include min-max scaling, z-score normalization, or using algorithms like Principal Component Analysis (PCA) for feature scaling.\nLastly, Carol explored how to handle missing values in datasets. Missing values can occur due to various reasons, and their presence can adversely affect the performance of machine learning models. Carol discovered techniques such as imputation, where missing values are filled with estimated or interpolated values, or removal of instances with missing values based on specific criteria.\nAs Carol delved into the topic of data preprocessing, she realized that it was a critical step in building accurate and reliable machine learning models. It involved cleaning and transforming the data, scaling features, and handling missing values to ensure the data was suitable for analysis. With her newfound knowledge, Carol understood that proper data preprocessing could significantly impact the performance and outcomes of AI systems.`,
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
                    text: "Data Preprocessing",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['datapreprocessing'],
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
                                    path: ['featureselection'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Model Training",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['modeltraining'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Model Evaluation",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['modelevaluation'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Deployment",
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['deployment'],
                                },
                            ],
                        },
                    ],
                },
                {
                    text: "Land the plane already!",
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
            id: 'datapreprocessing',
            convo: [
                {
                    type: 'text',
                    text: `After Carol's flight and her metaphorical journey through AI concepts, she found herself intrigued by the topic of data preprocessing. As she delved deeper into the realm of artificial intelligence, Carol realized that data preprocessing played a crucial role in the success of machine learning models.\nData preprocessing involves transforming raw data into a format that is suitable for analysis and modeling. It includes a series of steps such as data cleaning, data transformation, feature scaling, and handling missing values. These steps are essential to ensure that the data is in a consistent and usable form for training and evaluating machine learning models.\nCarol began to explore the significance of data cleaning. She learned that real-world datasets are often messy and contain errors, outliers, or inconsistencies. Data cleaning involves tasks such as removing duplicate entries, correcting errors, dealing with missing values, and handling outliers to ensure the quality and reliability of the data.\nNext, Carol discovered the importance of data transformation. Different machine learning algorithms have different requirements regarding the distribution and scale of the data. Therefore, data transformation techniques such as normalization, standardization, or log transformation are used to make the data conform to these requirements. Carol realized that these transformations could greatly impact the performance and accuracy of the models.\nFeature scaling was another crucial aspect of data preprocessing that caught Carol's attention. Many machine learning algorithms are sensitive to the scale of the input features. Therefore, it is often necessary to scale the features to a similar range. Common techniques include min-max scaling, z-score normalization, or using algorithms like Principal Component Analysis (PCA) for feature scaling.\nLastly, Carol explored how to handle missing values in datasets. Missing values can occur due to various reasons, and their presence can adversely affect the performance of machine learning models. Carol discovered techniques such as imputation, where missing values are filled with estimated or interpolated values, or removal of instances with missing values based on specific criteria.\nAs Carol delved into the topic of data preprocessing, she realized that it was a critical step in building accurate and reliable machine learning models. It involved cleaning and transforming the data, scaling features, and handling missing values to ensure the data was suitable for analysis. With her newfound knowledge, Carol understood that proper data preprocessing could significantly impact the performance and outcomes of AI systems.`,
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
            id: 'featureselection',
            convo: [
                {
                    type: 'text',
                    text: `After delving into the realm of data preprocessing, Carol's curiosity led her to explore the topic of feature selection. She learned that feature selection played a vital role in machine learning by identifying and selecting the most relevant and informative features from a dataset. Carol discovered that datasets often contain a multitude of features, and not all of them contribute equally to the predictive power of a model. In fact, some features may be redundant or noisy, which can negatively impact the model's performance and increase computational complexity. Feature selection aimed to address these issues by selecting a subset of features that capture the most relevant information for making accurate predictions. The first technique Carol encountered was the filter approach to feature selection. This method involves evaluating the characteristics of individual features independent of any specific machine learning algorithm. Common metrics used in the filter approach include correlation coefficients, mutual information, chi-square tests, or statistical tests like ANOVA. By ranking the features based on their relevance to the target variable, Carol realized that she could select the top-ranked features for further model training. Next, Carol explored the wrapper approach to feature selection. Unlike the filter approach, the wrapper approach evaluates the performance of a specific machine learning algorithm by iteratively selecting different subsets of features. This technique involves training and evaluating the model multiple times, which can be computationally expensive but provides more accurate feature rankings. Methods such as forward selection, backward elimination, or recursive feature elimination belong to the wrapper approach. Carol also learned about the embedded approach to feature selection. Embedded methods incorporate feature selection directly into the process of training a machine learning model. Certain algorithms, such as Lasso (Least Absolute Shrinkage and Selection Operator) and Ridge regression, have built-in mechanisms that penalize or eliminate irrelevant features during the training process. By using these embedded methods, Carol discovered that she could simultaneously perform feature selection and model training. As Carol continued her exploration, she realized the importance of feature selection in improving model performance, reducing overfitting, and increasing interpretability. By selecting the most relevant features, she could simplify the model, reduce computational costs, and enhance generalization to new data. Excited by her newfound knowledge of feature selection, Carol began to envision its application in various domains. She imagined its potential in areas such as healthcare, finance, and image recognition, where selecting the right set of features could lead to more accurate predictions and valuable insights. With feature selection, Carol understood that she could refine the input variables of a machine learning model, optimizing its performance and uncovering hidden patterns within the data. It was another fascinating aspect of the AI landscape that sparked her imagination and reinforced her passion for exploring the limitless possibilities of artificial intelligence.`,
                },
                {
                    type: 'text',
                    text: 'Use this mini-game to explore more about feature selection. What you are going to do is train a classifier that can recognize pictures. Also, pay attention to provide enough training examples. Go check it out!: guessingai.onrender.com',
                },
            ],
            choices: [
                {
                    text: 'Done',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['real-life-example'],
                                },
                            ],
                        },
                    ],
                },
            ],
        }, 
        {
            id: 'real-life-example',
            convo: [
                {
                    type: 'text',
                    text: `Here's an interesting real-life example connected to the topic of learning algorithms:`,
                },
                {
                    type: 'text',
                    text: `Supervised Learning Example: In the field of medicine, supervised learning algorithms have been used to develop systems that can assist in diagnosing diseases. One notable example is the detection of skin cancer using deep learning. Researchers at Stanford University trained a deep learning model using a dataset of images of skin lesions with corresponding labels indicating whether the lesion was cancerous or benign. The model learned to identify patterns and features in the images that are indicative of skin cancer. When tested on new, unseen images, the model achieved accuracy comparable to that of experienced dermatologists. This application demonstrates how supervised learning algorithms can learn from labeled data to make accurate predictions, similar to how humans learn from feedback and guidance.`,
                },
                {
                    type: 'text',
                    text: 'Link to the story: '
                },
                {
                    type: 'text',
                    text: `Deep learning algorithm does as well as dermatologists in identifying skin cancer (Stanford Medicine):`
                },
                {
                    type: 'text',
                    text: `https://news.stanford.edu/press/view/12239#:~:text=January%2025%2C%202017-,Deep%20learning%20algorithm%20does%20as%20well%20as%20dermatologists%20in%20identifying,algorithm%20to%20diagnose%20skin%20cancer.&text=It's%20scary%20enough%20making%20a,strange%20mole%20could%20be%20cancerous.`
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
            id: 'modeltraining',
            convo: [
                {
                    type: 'text',
                    text: `After delving into the realm of data preprocessing, Carol's curiosity led her to explore the topic of feature selection. She learned that feature selection played a vital role in machine learning by identifying and selecting the most relevant and informative features from a dataset. Carol discovered that datasets often contain a multitude of features, and not all of them contribute equally to the predictive power of a model. In fact, some features may be redundant or noisy, which can negatively impact the model's performance and increase computational complexity. Feature selection aimed to address these issues by selecting a subset of features that capture the most relevant information for making accurate predictions. The first technique Carol encountered was the filter approach to feature selection. This method involves evaluating the characteristics of individual features independent of any specific machine learning algorithm. Common metrics used in the filter approach include correlation coefficients, mutual information, chi-square tests, or statistical tests like ANOVA. By ranking the features based on their relevance to the target variable, Carol realized that she could select the top-ranked features for further model training. Next, Carol explored the wrapper approach to feature selection. Unlike the filter approach, the wrapper approach evaluates the performance of a specific machine learning algorithm by iteratively selecting different subsets of features. This technique involves training and evaluating the model multiple times, which can be computationally expensive but provides more accurate feature rankings. Methods such as forward selection, backward elimination, or recursive feature elimination belong to the wrapper approach. Carol also learned about the embedded approach to feature selection. Embedded methods incorporate feature selection directly into the process of training a machine learning model. Certain algorithms, such as Lasso (Least Absolute Shrinkage and Selection Operator) and Ridge regression, have built-in mechanisms that penalize or eliminate irrelevant features during the training process. By using these embedded methods, Carol discovered that she could simultaneously perform feature selection and model training. As Carol continued her exploration, she realized the importance of feature selection in improving model performance, reducing overfitting, and increasing interpretability. By selecting the most relevant features, she could simplify the model, reduce computational costs, and enhance generalization to new data. Excited by her newfound knowledge of feature selection, Carol began to envision its application in various domains. She imagined its potential in areas such as healthcare, finance, and image recognition, where selecting the right set of features could lead to more accurate predictions and valuable insights. With feature selection, Carol understood that she could refine the input variables of a machine learning model, optimizing its performance and uncovering hidden patterns within the data. It was another fascinating aspect of the AI landscape that sparked her imagination and reinforced her passion for exploring the limitless possibilities of artificial intelligence. Continuing her exploration of AI concepts, Carol became intrigued by the topic of model training. She learned that model training was a crucial step in machine learning, where a model learned from the available data to make predictions or perform tasks. Carol discovered that model training involved feeding the machine learning algorithm with labeled examples, also known as the training data. The algorithm then analyzed the data, adjusted its internal parameters, and learned to make predictions based on patterns and relationships present in the training data. She realized that different algorithms required different approaches to training. For example, supervised learning algorithms, such as linear regression or support vector machines, learned from labeled examples where the input features were paired with corresponding target labels. The model adjusted its parameters to minimize the difference between its predicted outputs and the true labels. Unsupervised learning algorithms, on the other hand, analyzed unlabeled data to discover patterns, structures, or clusters. Techniques like clustering or dimensionality reduction helped uncover inherent relationships within the data without the need for explicit labels. Carol found it fascinating how these algorithms could reveal hidden insights and provide a deeper understanding of the data. Reinforcement learning caught Carol's attention as well. In this type of learning, an agent interacted with an environment, learned from rewards and punishments, and adjusted its behavior to maximize cumulative rewards. She saw parallels between reinforcement learning and her childhood experiences of learning through trial and error, with the agent gradually improving its decision-making abilities. As Carol delved into the world of model training, she realized the significance of hyperparameter tuning. Hyperparameters were settings or configurations of the learning algorithms that were not learned from the data itself. They controlled the behavior and performance of the model. Techniques like grid search or random search helped find the optimal combination of hyperparameters to improve model performance. Carol was fascinated by the iterative nature of model training. It involved selecting an appropriate algorithm, preparing the data, feeding it to the algorithm, adjusting parameters, evaluating performance, and repeating the process until satisfactory results were achieved. With a sense of awe and appreciation for the complexity and power of model training, Carol saw how it formed the foundation of AI systems. It was the process that allowed machines to learn from data, make predictions, and accomplish tasks that once seemed reserved for human intelligence. As she continued her exploration, Carol looked forward to unraveling the subsequent steps of model evaluation and deployment. She realized that these steps were essential to ensure the reliability, robustness, and real-world applicability of AI systems.`,
                },
                {
                    type: 'text',
                    text: 'Ever played the famous google doodle game, Quick, Draw! ? Well, it is a good example that shows model training by guessing what you are drawing off of previous drawings by other people.',
                },
            ],
            choices: [
                {
                    text: 'Try it out!',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['quick-draw-minigame'],
                                },
                            ],
                        },
                    ],
                },
            ],
        }, 
        {
            id: 'quick-draw-minigame',
            convo: [
                {
                    type: 'text',
                    text: `It takes into account the shapes you draw, the order of your drawing strokes, and the direction in which you draw.`,
                },
                {
                    type: 'text',
                    text: `https://quickdraw.withgoogle.com/`,
                }
            ],
            choices: [
                {
                    text: 'Read a quick article about the rising issues between art and AI! ',
                    logic: [
                        {
                            do: [
                                {
                                    type: 'goto',
                                    path: ['real-life-drawing-ai'],
                                },
                            ],
                        },
                    ],
                },
            ],
        }, 
        {
            id: 'real-life-drawing-ai',
            convo: [
                {
                    type: 'text',
                    text: `Though with Quick, Draw! it was a fun game where the computer used drawings from other people to guess your drawing, it can actually be detrimental in larger-scale real world scenarios.`,
                },
                {
                    type: 'text',
                    text: `There has been AI developed for the public, where although it is fun to experiment with, individuals have created a new dilemma in the artistic world: AI is told to generate images or 'art' pieces based of prompts written by a human, and it then pulls images from all over the internet. That includes already existing digital art and physical art uploaded to the internet pulled together to make 'new' art but less time consuming. With this, artists are faced with a new challenge and will put them out of work due to this technology, which will affect the movies, shows, and games we see and use everyday. The more images and drawings are fed into an AI program, the more it refines its output that will resemble human-made art. `,
                },
                {
                    type: 'text',
                    text: 'To learn more about the new phenomenon between AI and digital art, follow this link: '
                },
                {
                    type: 'text',
                    text: `An A.I.-Generated Picture Won an Art Prize. Artists Are Not Happy. (NY Times)`
                },
                {
                    type: 'text',
                    text: `https://www.nytimes.com/2022/09/02/technology/ai-artificial-intelligence-artists.html`
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
            id: 'modelevaluation',
            convo: [
                {
                    type: 'text',
                    text: `Continuing her AI journey, Carol delved into the topic of model evaluation. She discovered that model evaluation was a crucial step in assessing the performance and effectiveness of machine learning models. Carol learned that model evaluation involved measuring how well a trained model generalized to new, unseen data. It aimed to provide insights into the model's predictive accuracy, robustness, and suitability for the intended task. She discovered common evaluation metrics such as accuracy, precision, recall, F1 score, or area under the ROC curve (AUC-ROC), depending on the specific problem and the nature of the data. Carol also encountered the concept of cross-validation, which involved partitioning the available data into multiple subsets. The model was then trained and evaluated on different combinations of these subsets, allowing for a more reliable estimation of its performance. Furthermore, she explored techniques like holdout validation, k-fold cross-validation, or stratified sampling, which helped ensure unbiased evaluation and mitigate the risk of overfitting or underfitting. Carol realized that model evaluation was not limited to performance metrics. It could also involve assessing other factors, such as interpretability, scalability, computational efficiency, or ethical considerations, depending on the context and requirements of the application. She understood that robust model evaluation provided valuable insights into the strengths, limitations, and trade-offs of different models, aiding in the selection of the most appropriate solution for a given problem. With her newfound knowledge of model evaluation, Carol recognized the importance of this step in the machine learning pipeline. It helped ensure the reliability and real-world applicability of AI systems, allowing for informed decision-making and effective deployment. As Carol looked ahead to the final step of deployment, she anticipated the exciting challenges and opportunities that lay ahead in bringing AI models into practical use and making a positive impact on various domains.`,
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
            id: 'deployment',
            convo: [
                {
                    type: 'text',
                    text: `Carol's exploration of AI concepts led her to the final step: deployment. She discovered that deployment was the process of integrating and implementing trained machine learning models into real-world applications. Deployment involved making the model accessible and operational, allowing it to interact with users or other systems to provide predictions or perform tasks. It required considerations such as infrastructure setup, model integration, scalability, and monitoring. Carol learned about different deployment approaches, such as deploying models as web services or APIs, embedding them into applications or devices, or utilizing cloud platforms for scalable and distributed deployment. She understood that deployment involved ensuring the model's reliability, efficiency, and security in production environments. Testing, performance optimization, and monitoring were critical to maintaining the model's performance and addressing any issues that may arise. Additionally, Carol discovered the importance of versioning and maintaining model updates. As new data became available or requirements changed, retraining and updating the deployed model ensured its continued relevance and accuracy. With her newfound understanding of deployment, Carol saw the potential to apply her AI knowledge in real-world scenarios. She envisioned AI-powered applications across various domains, from healthcare and finance to transportation and customer service, making processes more efficient, informed, and impactful. Excited by the possibilities, Carol realized that deployment was the culmination of her AI journey, where the power of machine learning and intelligent systems could be harnessed to bring about positive change in the world. As she concluded her exploration, Carol felt inspired by the potential of AI deployment, ready to embark on new challenges and contribute to the advancement of artificial intelligence in practical applications.`,
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
                    text: `Carol has landed! Now test your knowledge before following Carol to explore Apricot Stone City`,
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
                    text: `In the story, which cloud formation represented the concept of supervised learning?`,
                },
            ],
            choices: [
                {
                    text: 'The cloud resembling a teacher guiding a student',
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
                    text: 'The cloud resembling a textbook filled with valuable information',
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
                    text: 'The cloud resembling a child learning through trial and error',
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
                    text: 'The cloud resembling a neural network with the interconnectedness',
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
                    In the story, when Carol compared her exploration of countless books to a machine learning concept, which step of the machine learning process does it relate to?`,
                },
            ],
            choices: [
                {
                    text: 'Data preprocessing',
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
                    text: 'Feature selection',
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
                    text: 'Model training',
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
                    text: 'Model evaluation',
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
                    text: `During Carol\'s metaphorical journey through AI concepts, which step of the machine learning process did her interaction with the real world, such as observing clouds and reminiscing about childhood experiences, correspond to?`,
                },
            ],
            choices: [
                {
                    text: 'Feature selection',
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
                    text: 'Data preprocessing',
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
                    text: 'Model training',
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
                    text: 'Model evaluation.',
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
                    text: `In the story, what does Carol\'s metaphorical journey through AI concepts represent in the context of the machine learning process?`,
                },
            ],
            choices: [
                {
                    text: 'Feature selection',
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
                    text: 'Data preprocessing',
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
                    text: 'Model training',
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
                    text: 'Model evaluation.',
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
                    text: `Which stage of the AI process can be compared to exploring uncharted territories, gathering and preparing data to lay the foundation for further analysis?`,
                },
            ],
            choices: [
                {
                    text: 'Data preprocessing',
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
                    text: 'Feature selection',
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
                    text: 'Model training',
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
                    text: 'Model evaluation.',
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

export default lookingAtClouds
