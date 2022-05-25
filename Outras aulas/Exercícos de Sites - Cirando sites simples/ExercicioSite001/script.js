function load(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("image")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`

    if(hora >=0 && hora < 12){
        //Bom dia
        img.src = './img/morning-img.png'
        document.body.style.background = 'white';
    } else if (hora >=12 && hora <= 18){
        //Boa tarde
        document.body.style.background = 'blue';
        img.src = './img/noon-img.png'
    } else{
        //Boa noite
        img.src = './img/night-img.png'
        document.body.style.background = "black";
    }
}