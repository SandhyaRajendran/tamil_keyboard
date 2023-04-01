const numbers = document.querySelector('.numbers')
// console.log(numbers)
const allKeywords = [
    {
        id: 0,
        letter: '`',
        capsLetter: '~',
        tamilLetters: 'அ'
    },
    {
        id: 1,
        letter: '1',
        capsLetter: '!',
        tamilLetters: 'ஆ'
    },
    {
        id: 2,
        letter: '2',
        capsLetter: '@',
        tamilLetters: 'இ'
    },
    {
        id: 3,
        letter: '3',
        capsLetter: '#',
        tamilLetters: 'ஈ'
    },
    {
        id: 4,
        letter: '4',
        capsLetter: '$',
        tamilLetters: 'உ'
    },
    {
        id: 5,
        letter: '5',
        capsLetter: '%',
        tamilLetters: 'ஊ'
    },
    {
        id: 6,
        letter: '6',
        capsLetter: '^',
        tamilLetters: 'எ'
    },
    {
        id: 7,
        letter: '7',
        capsLetter: '&',
        tamilLetters: 'ஏ'
    },
    {
        id: 8,
        letter: '8',
        capsLetter: '*',
        tamilLetters: 'ஐ'
    },
    {
        id: 9,
        letter: '9',
        capsLetter: '(',
        tamilLetters: 'ஒ'
    },
    {
        id: 10,
        letter: '0',
        capsLetter: ')',
        tamilLetters: 'ஓ'
    },
    {
        id: 11,
        letter: '-',
        capsLetter: '_',
        tamilLetters: 'ஔ'
    },
    {
        id: 12,
        letter: '=',
        capsLetter: '+',
        tamilLetters: 'ஃ'
    },
    {
        id: 13,
        letter: 'backspace',
        capsLetter: 'BACKSPACE',
        tamilLetters: 'பின்வெளி'
    },
    {
        id: 14,
        letter: 'Tab',
        capsLetter: 'TAB',
        tamilLetters: 'tab'
    },
    {
        id: 15,
        letter: 'q',
        capsLetter: 'Q',
        tamilLetters: 'க'

    },
    {
        id: 16,
        letter: 'w',
        capsLetter: 'W',
        tamilLetters: 'ங'
    },
    {
        id: 17,
        letter: 'e',
        capsLetter: 'E',
        tamilLetters: 'ச'
    },
    {
        id: 18,
        letter: 'r',
        capsLetter: 'R',
        tamilLetters: 'ஞ'
    },
    {
        id: 19,
        letter: 't',
        capsLetter: 'T',
        tamilLetters: 'ட'
    },
    {
        id: 20,
        letter: 'y',
        capsLetter: 'Y',
        tamilLetters: 'ண'
    },
    {
        id: 21,
        letter: 'u',
        capsLetter: 'U',
        tamilLetters: 'த'
    },
    {
        id: 22,
        letter: 'i',
        capsLetter: 'I',
        tamilLetters: 'ந'
    },
    {
        id: 23,
        letter: 'o',
        capsLetter: 'O',
        tamilLetters: 'ப'
    },

    {
        id: 24,
        letter: 'p',
        capsLetter: 'P',
        tamilLetters: 'ம'
    },
    {
        id: 25,
        letter: '{',
        capsLetter: '=',
        tamilLetters: 'ய'
    },
    {
        id: 26,
        letter: '}',
        capsLetter: '}',
        tamilLetters:'ர' 
    },
    {
        id: 27,
        letter: '|',
        capsLetter: '|',
        tamilLetters:'ஜ'
    },
    {
        id: 28,
        letter: 'capsLock',
        capsLetter: 'CAPSLOCK',
        tamilLetters:'CapsLock'
    },
    {
        id: 29,
        letter: 'a',
        capsLetter: 'A',
        tamilLetters: 'ல'
    },
    {
        id: 30,
        letter: 's',
        capsLetter: 'S',
        tamilLetters: 'வ'
    },
    {
        id: 31,
        letter: 'd',
        capsLetter: 'D',
        tamilLetters: 'ழ'
    },
    {
        id: 32,
        letter: 'f',
        capsLetter: 'F',
        tamilLetters: 'ள'
    },
    {
        id: 33,
        letter: 'g',
        capsLetter: 'G',
        tamilLetters: 'ற'
    },
    {
        id: 34,
        letter: 'h',
        capsLetter: 'H',
        tamilLetters: 'ன'
    },
    {
        id: 35,
        letter: 'j',
        capsLetter: 'J',
        tamilLetters: '்'
    },
    {
        id: 36,
        letter: 'k',
        capsLetter: 'K',
        tamilLetters: 'ா'
    },
    {
        id: 37,
        letter: 'l',
        capsLetter: 'L',
        tamilLetters: 'ி'
    },
    {
        id: 38,
        letter: ';',
        capsLetter: ':',
        tamilLetters:'ஷ'
    },
    {
        id: 39,
        letter: '"',
        capsLetter: '"',
        tamilLetters:'ஹ'
    },
    {
        id: 40,
        letter: 'Enter',
        capsLetter: 'ENTER',
        tamilLetters:'enter'
    },
    {
        id: 41,
        letter: 'shift',
        capsLetter: 'SHIFT',
        tamilLetters:'Shift'
    },
    {
        id: 42,
        letter: 'z',
        capsLetter: 'Z',
        tamilLetters: 'ீ'
    },
    {
        id: 43,
        letter: 'x',
        capsLetter: 'X',
        tamilLetters: 'ு',
    },
    {
        id: 44,
        letter: 'c',
        capsLetter: 'C',
        tamilLetters:  'ூ',
    },
    {
        id: 45,
        letter: 'v',
        capsLetter: 'V',
        tamilLetters: 'ெ',
    },
    {
        id: 46,
        letter: 'space',
        capsLetter: 'SPACE',
        tamilLetters: "இடைவெளி"
    },
    {
        id: 47,
        letter: 'b',
        capsLetter: 'B',
        tamilLetters: 'ே'
    },
    {
        id: 48,
        letter: 'n',
        capsLetter: 'N',
        tamilLetters: 'ெ'
    },
    {
        id: 49,
        letter: 'm',
        capsLetter: 'M',
        tamilLetters: 'ை'
    },
    {
        id: 50,
        letter: ',',
        capsLetter: ',',
        tamilLetters: 'ொ'
    },

    {
        id: 51,
        letter: '.',
        capsLetter: '.',
        tamilLetters: 'ோ',
    },
    {
        id: 52,
        letter: '/',
        capsLetter: '/',
        tamilLetters: 'ௌ',
    }]

let value = 0;
let valueTwo = 0;

window.addEventListener('DOMContentLoaded', (e) => {
    for (let i = 0; i < allKeywords.length; i++) {
        const btn = document.createElement('button')
        btn.innerText = allKeywords[i].letter
        numbers.append(btn)
        btn.className = allKeywords[i].letter

        btn.addEventListener('click', function (e) {
            const inputBoxValue = document.querySelector('#textareaValue')
            if (e.target.classList.contains('Tab') || e.target.classList.contains('TAB') || e.target.classList.contains('tab') ) {
                inputBoxValue.value += "    "
            }
            else if (e.target.classList.contains('backspace') ||e.target.classList.contains('பின்வெளி') || e.target.classList.contains('BACKSPACE')) {
                inputBoxValue.value = inputBoxValue.value.slice(0, -1)
            }
            else if (e.target.classList.contains('capsLock') || e.target.classList.contains('CapsLock') || e.target.classList.contains('CAPSLOCK')) {
                inputBoxValue.innerText = ''
            }
            else if (e.target.classList.contains('Enter') || e.target.classList.contains('enter') || e.target.classList.contains('ENTER')) {
                inputBoxValue.value += "\n";
            }
            else if (e.target.classList.contains('shift') || e.target.classList.contains('Shift') || e.target.classList.contains('SHIFT')) {

            }
            else if (e.target.classList.contains('space') || e.target.classList.contains('SPACE') || e.target.classList.contains('இடைவெளி')) {
                inputBoxValue.value += " "
            }
            else {
                inputBoxValue.value += btn.innerText
            }
        })
    }

    const bttn = document.querySelectorAll('button')
    const capsLock = document.querySelector('.capsLock')
    capsLock.addEventListener('click', function (e) {
        value++
        for (let l = 0; l < bttn.length + 1; l++) {
            if (value == 3) {
                value = 1
            }
            if (value == 1) {
                bttn[l].innerText = allKeywords[l].capsLetter
                bttn[l].className = allKeywords[l].capsLetter
            }
            else if (value == 2) {
                bttn[l].innerText = allKeywords[l].letter
                bttn[l].className = allKeywords[l].letter
            }
        }
    })
    const shift = document.querySelector('.shift')
    // console.log(shift)
    shift.addEventListener('click', function (e) {
        valueTwo++
        for (let l = 0; l < bttn.length + 1; l++) {
            if (valueTwo == 3) {
                valueTwo = 1
            }
            if (valueTwo == 1) {
                bttn[l].innerText = allKeywords[l].capsLetter
                bttn[l].className = allKeywords[l].capsLetter
            }
            else if (valueTwo == 2) {
                bttn[l].innerText = allKeywords[l].letter
                bttn[l].className = allKeywords[l].letter
            }
        }
    })

    const tamilBtn = document.querySelector('.Tamil')
    // console.log(tamilBtn)
    tamilBtn.addEventListener('click',function(e){
        const bttn = document.querySelectorAll('button')
        console.log(e.target.className)
        for(let x=0; x<bttn.length; x++){
            bttn[x].innerText = allKeywords[x].tamilLetters
            bttn[x].className = allKeywords[x].tamilLetters
        }
        const inputBoxValue = document.querySelector('#textareaValue')
            inputBoxValue.value += bttn.innerText
        
    })
    
})

window.addEventListener('keydown', function (e) {
    const inputBoxValue = document.querySelector('#textareaValue')
    // inputBoxValue.value += e.key
    console.dir(e.key)
    if (e.key == "Tab") {
        inputBoxValue.value += "    "
    }
    else if (e.key == 'Enter') {
        inputBoxValue.value += "\n";
    }
    else if (e.key == 'Backspace') {
        inputBoxValue.value = inputBoxValue.value.slice(0, -1)
    }
    else if (e.key == 'Insert' || e.key == 'End' || e.key == 'Home' || e.key == 'Delete' || e.key == "Alt" || e.key == "Tab" || e.key == "CapsLock" || e.key == "Shift" || e.key == 'Control' || e.key == 'Backspace' || e.key == 'Enter' || e.key == 'Escape') {
    }
    else {
        inputBoxValue.value += e.key
    }

})
