// DOM
const touch = [...document.querySelectorAll('.touch')]
const listKeycode = touch.map(element => element.dataset.key)
const screen = document.querySelector('.screen')

// En appuyant sur la touche
document.addEventListener('keydown', (e) => {
  const value = e.keyCode.toString();
  calculate(value)
})

// En cliquant sur la touche à l'écran
document.addEventListener('click', (e) =>{
    const value = e.target.dataset.key;
    calculate(value)
})

// Calculs
const calculate = (value) => {
    if(listKeycode.includes(value)){
        switch(value) {
            case '8' : // Cas pour le "C"
                screen.textContent = ""
                break
            case '13' : // Cas pour le bouton "=" (ou Enter)
                const calcul = eval(screen.textContent)
                screen.textContent = calcul
                break
            default: // Cas pour toutes les autres touches
                const indexKeycode = listKeycode.indexOf(value)
                const tap = touch[indexKeycode]
                screen.textContent += tap.innerHTML
        }
    }
}