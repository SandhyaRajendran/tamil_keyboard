const numbers = document.querySelector('.numbers')
console.log(numbers)
const allKeywords = [
    {
        id: 0,
        letter: '`',
        capsLetter: '~',
    },
    {
        id: 0,
        letter: '1',
        capsLetter: '!',
    },
{
    id: 1,
    letter: '2',
    capsLetter: '@',
},
{
    id: 2,
    letter: '3',
    capsLetter: '#',
},
{
    id: 3,
    letter: '4',
    capsLetter: '$',
},
{
    id: 4,
    letter: '5',
    capsLetter: '%',
},
{
    id: 5,
    letter: '6',
    capsLetter: '^',
},
{
    id: 6,
    letter: '7',
    capsLetter: '&',
},
{
    id: 7,
    letter: '8',
    capsLetter: '*',
},
{
    id: 8,
    letter: '9',
    capsLetter: '(',
},
{
    id: 9,
    letter: '0',
    capsLetter: ')',
},
{
    id: 10,
    letter: '-',
    capsLetter: '_',
},
{
    id: 11,
    letter: '=',
    capsLetter: '+',
},
{
    id: 12,
    letter: 'backspace',
    capsLetter: 'BACKSPACE',
},
]



for(let i = 0; i < allKeywords.length; i++) {
    const letterBox = document.createElement('button')
    letterBox.innerText = allKeywords[i].letter
    numbers.append(letterBox)
    letterBox.className = allKeywords[i].letter
    letterBox.addEventListener('click', function (e) {
        // console.dir(e.target)
        const test = document.querySelector('#test')
        if(e.target.classList.contains('backspace') ||e.target.classList.contains('BACKSPACE')){
            // alert('hi')
            test.value = test.value.slice(0,-1) 
        }
        else{
            test.value += letterBox.innerText
        }
    })
}


let allLetters = [
    {
        id: 0,
        letter: 'Tab',
        capsLetter: 'TAB',
    },                      
    {
        id: 0,
        letter: 'q',
        capsLetter: 'Q',
    },
    {
        id: 1,
        letter: 'w',
        capsLetter: 'W',
    },
    {
        id: 2,
        letter: 'e',
        capsLetter: 'E',
    },
    {
        id: 3,
        letter: 'r',
        capsLetter: 'R',
    },
    {
        id: 4,
        letter: 't',
        capsLetter: 'T',
    },
    {
        id: 5,
        letter: 'y',
        capsLetter: 'Y',
    },
    {
        id: 6,
        letter: 'u',
        capsLetter: 'U',
    },
    {
        id: 7,
        letter: 'i',
        capsLetter: 'I',
    },
    {
        id: 8,
        letter: 'o',
        capsLetter: 'O',
    },

    {
        id: 9,
        letter: 'p',
        capsLetter: 'P',
    },
    {
        id: 10,
        letter: '{',
        capsLetter: '=',
    },
    {
        id: 11,
        letter: '}',
        capsLetter: '}',
    },
    {
        id: 12,
        letter: '|',
        capsLetter: '|',
    },
]

const firstRowletters= document.querySelector('.firstRowletters')
for (let i = 0; i < allLetters.length; i++) {
    const letterBox = document.createElement('button')
    letterBox.innerText = allLetters[i].letter
    firstRowletters.append(letterBox)
    letterBox.className = allLetters[i].letter
    letterBox.addEventListener('click', function (e) {
        // console.dir(e.target)
        const test = document.querySelector('#test')
        if(e.target.classList.contains('Tab') || e.target.classList.contains('TAB')){
            test.value += "    "
        }
        else{
            test.value +=letterBox.innerText 
        }
    })
}
let allLetterss = [
    {
        id: 0,
        letter: 'capsLock',
        capsLetter: 'CAPSLOCK',
    },
    {
        id: 1,
        letter: 'a',
        capsLetter: 'A',
    },
    {
        id: 2,
        letter: 's',
        capsLetter: 'S',
    },
    {
        id: 3,
        letter: 'd',
        capsLetter: 'D',
    },
    {
        id: 4,
        letter: 'f',
        capsLetter: 'F',
    },
    {
        id: 5,
        letter: 'g',
        capsLetter: 'G',
    },
    {
        id: 6,
        letter: 'h',
        capsLetter: 'H',
    },
    {
        id: 7,
        letter: 'j',
        capsLetter: 'J',
    },
    {
        id: 8,
        letter: 'k',
        capsLetter: 'K',
    },

    {
        id: 9,
        letter: 'l',
        capsLetter: 'L',
    },
    {
        id: 10,
        letter: ';',
        capsLetter: ';',
    },
    {
        id: 11,
        letter: '"',
        capsLetter: '"',
    },
    {
        id: 12,
        letter: 'Enter',
        capsLetter: 'ENTER',
    }
]


const secondRowletters = document.querySelector('.secondRowletters')
for(let i = 0; i < allLetterss.length; i++) {
    const letterBox = document.createElement('button')
    letterBox.innerText = allLetterss[i].letter
    secondRowletters.append(letterBox)
    letterBox.className = allLetterss[i].letter
    letterBox.addEventListener('click', function (e) {
        // console.dir(e.target)
        const test = document.querySelector('#test')
        if(e.target.classList.contains('capsLock') ||e.target.classList.contains('CAPSLOCK')){
            test.innerText = '';
            test.value = test.value.toUpperCase()
        }
        else if(e.target.classList.contains('Enter')){
            alert('enter')
            test.value +="\n";
        }
        else{
            test.value += letterBox.innerText
        }
    })
}

let allLettersss = [
    {
        id: 0,
        letter: 'shift',
        capsLetter: 'SHIFT',
    },
    {
        id: 1,
        letter: 'z',
        capsLetter: 'Z',
    },
    {
        id: 2,
        letter: 'x',
        capsLetter: 'X',
    },
    {
        id: 3,
        letter: 'c',
        capsLetter: 'C',
    },
    {
        id: 4,
        letter: 'v',
        capsLetter: 'V',
    },
    {
        id: 5,
        letter: 'space',
        capsLetter: 'SPACE',
    },
    {
        id: 5,
        letter: 'b',
        capsLetter: 'B',
    },
    {
        id: 6,
        letter: 'n',
        capsLetter: 'N',
    },
    {
        id: 7,
        letter: 'm',
        capsLetter: 'M',
    },
    {
        id: 8,
        letter: ',',
        capsLetter: ',',
    },

    {
        id: 9,
        letter: '.',
        capsLetter: '.',
    },
    {
        id: 10,
        letter: '/',
        capsLetter: '/',
    },
]

const thirdRowletters = document.querySelector('.thirdRowletters')
for(let i = 0; i < allLettersss.length; i++) {
    const letterBox = document.createElement('button')
    letterBox.innerText = allLettersss[i].letter
    thirdRowletters.append(letterBox)
    letterBox.className = allLettersss[i].letter
    letterBox.addEventListener('click', function (e) {
        // console.dir(e.target)
        const test = document.querySelector('#test')
        if(e.target.classList.contains('shift') || e.target.classList.contains('SHIFT')) {
            test.innerText = '';
            
        }
        else if(e.target.classList.contains('space') || e.target.classList.contains('SPACE')) {
            test.value += " "
        }
        else{
            test.value += letterBox.innerText
        }
        if(e.shiftKey){
            test.innerText = "hi"
        }
    })
}

// window.addEventListener('keydown',function(e){
//     // alert('keyboard is working')
//     const test = document.querySelector('#test')
//     test.value += e.key
//     console.dir(e.key)
//         // if(e.key == 'Tab' || e.key  == 'CapsLock' || e.key == 'Control' || e.key == 'Shift' || e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Alt'){
//         //     test.innerText += ''
//         // }
//         if(e.key == 'Tab'){}
// })
