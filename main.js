function vai() {

var msg = document.getElementById('msg')
var imagem = document.getElementById('photo')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){
    imagem.src="./img/morning.png"
    document.body.style.background = '#c095ab'

}else if (hora >= 12 && hora <= 18){
    imagem.src='./img/afternoon.png'
    document.body.style.background = '#addaff'

}else{
    imagem.src='./img/night.png'
    document.body.style.background = '#081c22'
}


}
 