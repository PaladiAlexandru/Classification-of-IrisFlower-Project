import SVG1 from '../../images/svg-1.svg'
import SVG2 from '../../images/svg-2.svg'
import SVG3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'The iris flower',
    headline: 'Did you know ?',
    description: 'There are approximately 280 species of irises in the world. Our current model can guess three of them: Virginica, Setosa and Versicolor.',
    buttonLabel: 'Learn more',
    buttonTo: 'about',
    imgStart: false,
    img: SVG1,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: false
}

export const homeObjTwo = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Machine Learning',
    headline: 'Guess the species',
    description: 'This webpage uses a machine learning model to guess the species of an iris flower taking into consideration some input parameters.',
    buttonLabel: 'Learn more',
    buttonTo: 'team',
    imgStart: true,
    img: SVG2,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: true
}

export const homeObjThree = {
    id: 'team',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Our team',
    headline: 'Together we can',
    description: 'Our team structure is composed as it follows: Mariciuc Ioan, Albert Onofrei, Paladi Alexandru and Pricop Cosmin-Petrica',
    buttonLabel: 'Try it now',
    buttonTo: 'try',
    imgStart: false,
    img: SVG3,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: false
}

export const homeObjForm = {
    id: 'try',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Ask our AI',
    headline: 'Fill the details',
    description: 'Our AI will try to guess what species of iris flower is matching the inputs you give it.',
    buttonLabel: 'Make a guess',
    buttonTo: 'try',
    imgStart: true,
    dark: true,
    primary: true,
    darkText: true
}