let pratosPrincipais = [
    {id: 1, nome: "Bife com batata", price: 30.0},
    {id: 2, nome: "Coxa de frango", price: 25.0},
    {id: 3, nome: "Carne de panela", price: 22.0},
    {id: 4, nome: "Farora", price: 10.0},
    {id: 5, nome: "Salada", price: 8.0},
    {id: 6, nome: "Torresmo", price: 12.0}
]

function calc(){
    let quantities = document.getElementsByName("quantity")
    let output = document.getElementById("output")
    let total = 0

    let nomeCliente = document.getElementById("nomeClient").value
    output.innerHTML = `Caro <strong>${nomeCliente}</strong> </br></br> Seu Pedido é: </br></br>`

    let pratosSelecionados = [] // array vazio que vai receber de fato os escolhidos

    for(let input of quantities){
        let quantidade = parseFloat(input.value)
        if (quantidade > 0){
            let id = input.id
            let prato = pratosPrincipais[id-1] //recebe cada prato individualmente
            pratosSelecionados.push({ //push() para adicionar um ou mais elementos no final do array
                ...prato, //copia as propriedades do prato
                quantidade: quantidade //quantidade selecionada dentro do objeto
            })
        }

    } 

    for(let prato of pratosSelecionados){
        let subtotal = prato.price * prato.quantidade
        output.innerHTML += `Prato: ${prato.nome}  - Preço Unit: R$${prato.price} - Quantidade: ${prato.quantidade} </br>`
        total += subtotal
    }        

    if(pratosSelecionados.length > 0){
    output.innerHTML += `<h2> Total: R$${total.toFixed(2)} </h2>`
    }

    else{
         output.innerHTML += `<p>Nenhum item selecionado.</p>`
}

}