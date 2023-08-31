

let numero = 1

let imagemSlide = 1

let bannerContent = document.getElementById("banner-content")

let bannerBackground = bannerContent.style.backgroundImage

if(bannerBackground.match(/(\d+)/) == null) {
    imagemSlide = 1
} else {
imagemSlide = parseInt(bannerBackground.match(/(\d+)/)[0])
}

// if(bannerBackground == '') bannerBackground = 'url("./assets/mc-banner01.png")'

// imagemSlide = parseInt(bannerBackground.match(/(\d+)/)[0])

function passarFotos()  {

    document.getElementById(`dot1`).style.backgroundColor = 'cyan'
    document.getElementById(`dot2`).style.backgroundColor = 'cyan'
    document.getElementById(`dot3`).style.backgroundColor = 'cyan'
    document.getElementById(`dot4`).style.backgroundColor = 'cyan'
    document.getElementById(`dot5`).style.backgroundColor = 'cyan'
    
    bannerBackground = bannerContent.style.backgroundImage
   
    if(numero == 6) numero = 1

    
    
    bannerBackground = `url('./assets/mc-banner0${numero}.png')`
    
    bannerContent.style.backgroundImage = `url('./assets/mc-banner0${numero}.png')`
    
    imagemSlide = parseInt(bannerBackground.match(/(\d+)/)[0])
    
    if((imagemSlide) != numero) console.log('teste')
    
    let dotFoto = document.getElementById(`dot${imagemSlide}`)

    let dotFotoAnterior = document.getElementById(`dot${(imagemSlide - 1)}`)

    if(dotFotoAnterior == null)  dotFotoAnterior = document.getElementById(`dot5`)
    
    dotFoto.style.backgroundColor = 'gray'
    dotFotoAnterior.style.backgroundColor = 'cyan'
    


    numero = numero + 1


}

function loopFunction(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(3000, passarFotos)


function dotClicar(number) {

    bannerContent.style.backgroundImage = `url('./assets/mc-banner0${number}.png')`

    imagemSlide = number
    
    numero = imagemSlide

    document.getElementById(`dot1`).style.backgroundColor = 'cyan'
    document.getElementById(`dot2`).style.backgroundColor = 'cyan'
    document.getElementById(`dot3`).style.backgroundColor = 'cyan'
    document.getElementById(`dot4`).style.backgroundColor = 'cyan'
    document.getElementById(`dot5`).style.backgroundColor = 'cyan'

    let dotFoto = document.getElementById(`dot${number}`)

    dotFoto.style.backgroundColor = 'gray'


}


function fecharMenu() {
    let menuCelular = document.getElementById('menu-celular-aberto')

    menuCelular.style.display = 'none'
}

function menuAbrir() {
    let menuCelular = document.getElementById('menu-celular-aberto')
    let body = document.querySelector('.body')

    if(menuCelular.style.display == 'block') {
        menuCelular.style.display = 'none'
        body.style.overflow = 'auto'
    } else {
        menuCelular.style.display = 'block'
        body.style.overflow = 'hidden'
    }

}

function carregarFotos() {
    
    bannerContent.style.backgroundImage = `url('./assets/mc-banner01.png')`
    bannerContent.style.backgroundImage = `url('./assets/mc-banner02.png')`
    bannerContent.style.backgroundImage = `url('./assets/mc-banner03.png')`
    bannerContent.style.backgroundImage = `url('./assets/mc-banner04.png')`
    bannerContent.style.backgroundImage = `url('./assets/mc-banner05.png')`

    bannerContent.style.backgroundImage = `url('./assets/mc-banner01.png')`


}
