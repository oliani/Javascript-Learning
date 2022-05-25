var now = new Date()
var diaSem = now.getDay()
/*
    0 = domingo; 1 = segunda; 2 = terça; 3 = quarta; 4 = quinta; 5 = sexta; 6 = sabado

    A maioria das coisas em programação costumam começar no 0, por ele tem valor 0, mas em contagem sempre começamos no 0
    Matrizes, vetores, e outros assuntos adotam essa mesma regra de contagem
    Quando a gente for ver Laços de Repetição, isso vai ficar mais claro ainda

*/

switch (diaSem){ // A estrutura de switch é extremamente importante
    case 0:
        console.log("Domingo")
    break;
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
        break
    default:
        console.log("[ERRO] Não foi possível verificar que dia é hoje!")
        // Não precisa de break na última
}