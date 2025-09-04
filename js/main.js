let pratosPrincipais = [
    {id: 1, nome: "Bife com batata", price: 30.0},
    {id: 2, nome: "Coxa de frango", price: 25.0},
    {id: 3, nome: "Carne de panela", price: 22.0}
]

function calc(){
    let quantities = document.getElementsByName("quantity")
    let output = document.getElementById("output")
    let total = 0


    output.innerHTML = ""

    for(let input of quantities){
        let id = input.id


        output.innerHTML += `Prato: ${pratosPrincipais[id-1].nome}  - Preço Unit: ${pratosPrincipais[id-1].price} - Quantidade: ${input.value} </br>`
        total += pratosPrincipais[id-1].price * parseFloat(input.value)
    }

    output.innerHTML += `<h2> Total: ${total} </h2>`
}