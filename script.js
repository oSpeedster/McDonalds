

let numero = 1

let imagemSlide = ''

let bannerContent = document.getElementById("banner-content")

let bannerBackground = bannerContent.style.backgroundImage

// if(bannerBackground == '') bannerBackground = 'url("./assets/mc-banner01.png")'

// imagemSlide = parseInt(bannerBackground.match(/(\d+)/)[0])

function passarFotos()  {
    
    bannerBackground = bannerContent.style.backgroundImage
   
    if(numero == 6) numero = 1

    bannerBackground = `url('./assets/mc-banner0${numero}.png')`
    
    bannerContent.style.backgroundImage = `url('./assets/mc-banner0${numero}.png')`
    
    
    imagemSlide = parseInt(bannerBackground.match(/(\d+)/)[0])
    
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

