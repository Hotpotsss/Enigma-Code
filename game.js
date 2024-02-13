const textElement = document.getElementById('narrativeText')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

const narrativeTexts = [
    {
        id: 1,
        text: 'You wake up in a strange place and see a jar of blue goo near you.',
        options: [
            {
                text: 'Take the goo',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text: 'Leave the goo',
                nextText: 2
            }
        ]
    },
    {
        id: 2
    }
]

function startGame () {
    state = {}
    showNarrativeText(1)
}

function showNarrativeText (textIndex) {
    const narrativeText = narrativeText.find(narrativeText => narrativeText.id === textIndex)
    textElement.innerText = narrativeText.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
}

function selectOption (option) {

}

startGame()