//Instantiate textElement variable and assign the variable to the "narrativeText" HTML text element.
const textElement = document.getElementById('narrativeText')
//Instantiate optionButtonsElement variable and assign the variable to the "option-buttons" HTML container element.
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

//Instantiate textNodes variable which holds information regarding: 1) ID, 2) Narrative Texts, 3) Prerequisites, 4) Possesions, 5) The next narrative step.
const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange place and see a jar of blue goo near you.',
        options: [
            {
                text: 'Take the blue goo',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text: 'Leave the blue goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You venture forth in search of answers to where you are when you come across a merchant.',
        options: [
            {
                text: 'Trade the blue goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'Trade the blue goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: 'Ignore the merchant',
                nextText: 3
            }
        ]
    }
]

function showTextNode (textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    //Remove Option Buttons
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

//A function which will manage and check option conditions.
function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

//A function which load the next narrative text and manage states.
function selectOption (option) {
    const nextTextNodeID = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeID)
}

//A function which will be called when the game is started.
function startGame () {
    state = {}
    showTextNode(1)
}

//Call startGame function to initiate game.
startGame()