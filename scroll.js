toString

let gameField = document.createElement('div')
gameField.className = 'gameField'

let backgroundField = document.createElement('div')
backgroundField.className = 'backgroundField'
backgroundField.style.width = '800px'
backgroundField.style.height = '800px'
backgroundField.style.background = 'url(./gameDev/scroll/texture/background.jpg)'
backgroundField.style.margin = 'auto'
backgroundField.style.zIndex = -1
backgroundField.style.position = 'relative'

let tableDiv = document.createElement('div')
tableDiv.className = 'tableDiv'

let tableField = document.createElement('table')
tableField.position = 'absolute'
tableField.style.margin = 'auto'

let tRow = 35
let tData = 44


// let startPosX = document.documentElement.clientHeight
// let startPosY = document.documentElement.clientWidth / 2

// let arrow = document.createElement('img')
// arrow.src = '/gameDev/scroll/texture/arrow.jpg'
// arrow.style.position = 'relative'
// arrow.style.top = `${startPosX-arrow.height}px`
// arrow.style.left = `${startPosY-arrow.width}px`
// arrow.style.height = '100px'

document.body.append(gameField)
gameField.append(backgroundField)
backgroundField.append(tableDiv)
tableDiv.append(tableField)
    // backgroundField.append(arrow)

// function scrollBackground() {
//     backgroundImg.scrollTop += 10
// }

// setInterval(() => scrollBackground(), 500)

for (let i = 0; i < tRow; i++) {
    tableField[i] = document.createElement('tr')
    tableField[i].ggHere = 'false'
    tableField.append(tableField[i])

    // tableField[i].style.width = '40px'
    // tableField[i].style.height = '40px'

    for (let g = 0; g < tData; g++) {
        tableField[i][g] = document.createElement('td')
        tableField[i].append(tableField[i][g])
        tableField[i][g].style.width = '10px'
        tableField[i][g].style.height = '10px'
        tableField[i][g].style.border = 'solid'
        tableField[i][g].style.margin = '0px'
        tableField[i][g].style.padding = '0px'
        tableField[i][g].ggHere = 'false'

    }
}

let x = 15
let y = 15

let ggHere = tableField[x][y]
ggHere.style.background = 'black'

function moveRight() {
    y += 1
    return y
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD' && y < tData - 1) {
        moveRight()
        ggHere = tableField[x][y]
        tableField[x][y].style.background = 'black'
        tableField[x][y - 1].style.background = 'none'
        ggHereNow()
    }
})

function moveLeft() {
    y -= 1
    return y
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyA' && y > 0) {
        moveLeft()
        ggHere = tableField[x][y]
        tableField[x][y].style.background = 'black'
        tableField[x][y + 1].style.background = 'none'
        ggHereNow()
    }
})


function moveUp() {
    x -= 1
    return x
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW' && x > 0) {
        moveUp()
        ggHere = tableField[x][y]
        tableField[x][y].style.background = 'black'
        tableField[x + 1][y].style.background = 'none'
        ggHereNow()
    }
})

function moveDawn() {
    x += 1
    return x
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyS' && x < tRow - 1) {
        moveDawn()
        ggHere = tableField[x][y]
        tableField[x][y].style.background = 'black'
        tableField[x - 1][y].style.background = 'none'
        ggHereNow()
    }
})

function ggHereNow() {
    console.log(x, y)
}

// function snakeMove() {
//     moveRight()
//     ggHere = tableField[x][y]
//     tableField[x][y].style.background = 'black'
//     tableField[x][y - 1].style.background = 'none'
//     ggHereNow()
// }