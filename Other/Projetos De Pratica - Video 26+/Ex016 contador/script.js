function logic(){
    var inicial = Number(window.document.getElementById('vinicial').value)
    var intervalo = Number(window.document.getElementById('vintervalo').value)
    var final = Number(window.document.getElementById('vfinal').value)
    var result = window.document.getElementById('resultdiv')
    result.innerText = 'Resultado: ';
    // window.alert(`Inicial = ${inicial} intervalo = ${intervalo} Final = ${final}`) <- usei para testar se pegou os valores certinho

    if(inicial < final && intervalo > 0){
        for(var i = inicial; i <= final; i += intervalo){
            result.innerText += i + '😁';
        }
    }else{
        window.alert('Verifique os valores digitados e tente novamente!')
    }
}