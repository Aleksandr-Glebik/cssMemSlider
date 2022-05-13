const objStatements = {
    carrer: 'Career growth in the company when you have no family ties',
    ofer: 'When received the first offer',
    relacate: 'When you have a few days to relacate',
    sideJob: 'My source of income while studying frontend',
    understand: 'When realized the difference between var and let'
}

const img = document.querySelector('.img')
const btnContainer = document.querySelector('.btn-container')
const statement = document.querySelector('.statement')

btnContainer.addEventListener('click', findBtnItem)

function findBtnItem(event) {
    let targetEl = event.target

    findIdBtn(targetEl)
}

function findIdBtn(el) {
    let btnId

    if (el.classList.contains('btn-item')) {
        btnId = el.firstElementChild.getAttribute('id')
    }

    if (el.classList.contains('btn')) {
        btnId = el.getAttribute('id')
    }

    searchLinkForImg(btnId)
    searchTextForStatement(btnId)
}

function searchLinkForImg(id) {
    let srcImg

    switch (id) {
        case 'btn-1':
          srcImg = './img/carrer.jpg'
          break;
        case 'btn-2':
          srcImg = './img/ofer.jpg'
          break;
        case 'btn-3':
          srcImg = './img/relacate.jpg'
          break;
        case 'btn-4':
          srcImg = './img/sideJob.jpg'
          break;
        case 'btn-5':
          srcImg = './img/understand.jpg'
          break;
    }

    changeImage(srcImg)
}

function changeImage(src) {
    img.setAttribute('src', src)

    if (img.classList.contains('fade-in-right')) {
        img.classList.remove('fade-in-right')
        setTimeout(() => {
            img.classList.add('fade-in-right')
           }, 0)
    } else {
        img.classList.add('fade-in-right')
    }
}

function searchTextForStatement(id) {
    let textContent

    switch (id) {
        case 'btn-1':
          textContent = objStatements.carrer
          break;
        case 'btn-2':
          textContent = objStatements.ofer
          break;
        case 'btn-3':
        textContent = objStatements.relacate
          break;
        case 'btn-4':
        textContent = objStatements.sideJob
          break;
        case 'btn-5':
        textContent = objStatements.understand
          break;
    }

    changeText(textContent)
}

function changeText(str) {
    statement.textContent = ''
    statement.textContent = str
    if (statement.classList.contains('focus-in-contract-bck')) {
        statement.classList.remove('focus-in-contract-bck')
        setTimeout(() => {
            statement.classList.add('focus-in-contract-bck')
           }, 0)
    } else {
        statement.classList.add('focus-in-contract-bck')
    }

    setTimeout(() => {
     statement.classList.remove('focus-in-contract-bck')
    }, 1000)
}

function preloadImages() {
    Object.keys(objStatements).forEach((el) => {
        const img = new Image()
        img.src = `./img/${el}.jpg`
        // console.log('img', img);
    })
}

preloadImages()