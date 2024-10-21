//insert amount of dances
const amountOfDances = 5


//creating dom arr
const dancesArr = document.querySelectorAll('header>div')
const pagesArr = document.querySelectorAll('#tuneSection>section')

function openDance (danceNr) {
    for (let i = 0; i < pagesArr.length; i++) {
        pagesArr[i].style.display = 'none';
    }
    pagesArr[danceNr-1].style.display = 'block'
    console.log(`clicked ${danceNr}`)
}


//triggerfuntions
const clickedDance1 = () => {openDance(1)}
const clickedDance2 = () => {openDance(2)}
const clickedDance3 = () => {openDance(3)}
const clickedDance4 = () => {openDance(4)}
const clickedDance5 = () => {openDance(5)}
const clickedDance6 = () => {openDance(6)}
const clickedDance7 = () => {openDance(7)}
const clickedDance8 = () => {openDance(8)}
const clickedDance9 = () => {openDance(9)}
const clickedDance10 = () => {openDance(10)}


//eventlisteners
dancesArr[0].addEventListener('click',clickedDance1)
dancesArr[1].addEventListener('click',clickedDance2)
dancesArr[2].addEventListener('click',clickedDance3)
dancesArr[3].addEventListener('click',clickedDance4)
dancesArr[4].addEventListener('click',clickedDance5)
dancesArr[5].addEventListener('click',clickedDance6)
dancesArr[6].addEventListener('click',clickedDance7)
dancesArr[7].addEventListener('click',clickedDance8)
dancesArr[8].addEventListener('click',clickedDance9)
dancesArr[9].addEventListener('click',clickedDance10)



