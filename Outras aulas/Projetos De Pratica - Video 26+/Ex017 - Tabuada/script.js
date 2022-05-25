function tabuada(){
    var valor = Number(document.getElementById("valor").value)
    var res = document.getElementById("tabuada")
    res.size = 10
    res.innerHTML = ' '
    for (var i = 0; i <=10; i++){
        var v = valor * i;
        var item = document.createElement('option')
        item.text = `${valor} x ${i} = ${v}`
        res.appendChild(item)
    }
}