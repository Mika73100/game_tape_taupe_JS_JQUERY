//ici je crée une const avec le cursor de ma sourie en CSS
const cursor = document.querySelector('.cursor')
//ici je crée une const de mes div de taupe et je les selectionne toutes dans un tableau
const holes = [...document.querySelectorAll('.hole')]
//ici je crée une const avec mon score et je fait appel a ma class score dans une span
const scoreEl = document.querySelector('.score span')

//ici une variable score
let score = 0

//ici je crée une constante avecc mon son dans les assets
const sound = new Audio("assets/smash.mp3")

//ici je crée une fonction run qui exécute une const i et je fais.
//un math floor pour me renvoyer un nombre qui sera random par la suite avec sur mes div .length permet de parcourir mon tableau holes.
function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    //ici ma const img crée un element image
    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = 'assets/mole.png'

    //l'image au click y a un écouteur et le score augmente de 10 on ajoute un son avec play et le socre E1 c'est du text
    img.addEventListener('click', () => {
        score += 10
        sound.play()
        scoreEl.textContent = score
        img.src = 'assets/mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 1500)
}

//j'appel ma fonction run
run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})