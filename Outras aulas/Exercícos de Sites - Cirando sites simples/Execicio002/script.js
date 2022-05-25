function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('txtano');
    var res = window.document.getElementById('res')
    if(fano.value.length <= 0 || fano.value > ano){
        window.alert('[ERRO]Verifique os dados inseridos e tente novamente');
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML =`Idade calculada ${idade}`
        var gender = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto')
        var person
        if (fsex[0].checked){
            gender = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
               person = '<p>Tem uma foto de uma criança do sexo masculino aqui, só não vê quem não quer o.o </p>'
            } else if(idade > 10 && idade <= 21){
                //Jovem
                person = '<p>Tem uma foto de um jovem do sexo masculino aqui, só não vê quem não quer o.o </p>'
            } else if(idade < 50){
                //adulto
                person = '<p>Tem uma foto de um adulto do sexo masculino aqui, só não vê quem não quer o.o </p>'
            } else{
                //Idoso
                person = '<p>Tem uma foto de um idoso do sexo masculino aqui, só não vê quem não quer o.o </p>'
            }
        } else if (fsex[1].checked){
            gender = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                person = '<p>Tem uma foto de uma criança do sexo feminino aqui, só não vê quem não quer o.o </p>'
            } else if(idade > 10 && idade <= 21){
                //Jovem
                person = '<p>Tem uma foto de um jovem do sexo feminino aqui, só não vê quem não quer o.o </p>'
            } else if(idade < 50){
                //adulto
                person = '<p>Tem uma foto de um adulto do sexo feminino aqui, só não vê quem não quer o.o </p>'
            } else{
                //Idoso
                person = '<p>Tem uma foto de um idoso do sexo feminino aqui, só não vê quem não quer o.o </p>'
            }
        } else{
            gender = 'Pessoa de sexo não definido'
            if (fsex[2].checked){
                gender = 'Outro'
                if(idade >= 0 && idade <= 10){
                    //criança
                    person = '<p>Tem uma foto de uma criança aqui, só não vê quem não quer o.o </p>'
                } else if(idade > 10 && idade <= 21){
                    //Jovem
                    person = '<p>Tem uma foto de um jovem aqui, só não vê quem não quer o.o </p>'
                } else if(idade < 50){
                    //adulto
                    person = '<p>Tem uma foto de um adulto aqui, só não vê quem não quer o.o </p>'
                } else{
                    //Idoso
                    person = '<p>Tem uma foto de um idoso aqui, só não vê quem não quer o.o </p>'
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gender} com idade de ${idade} anos.`
        var downTxt = document.getElementById('33')
        downTxt.innerHTML = person
        downTxt.style.textAlign = 'center'
        

        /* Fiquei com preguiça de recortar tanta foto, tenho mais coisa pra fazer do que mexer no Photoshop */
    }
}