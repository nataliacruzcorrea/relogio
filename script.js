    function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotos/bomdia.png'
        document.body.style.background = '#FCE78A'
    } 
    else if (hora >= 12 && hora < 18) {
        img.src = 'fotos/boatarde.png'
        document.body.style.background = '#E48840'

    } else {
        img.src = 'fotos/boanoite.png'
        document.body.style.background = '#02435F'

    }
}