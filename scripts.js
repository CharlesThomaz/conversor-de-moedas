//Cotção de moeda do dia.
const USD = 5.23
const EUR = 5.66
const GBP = 6.50


//Obtendo os elementos do Formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.querySelector("#result")



//Manipulando o input amount pra receber somente números. 
amount.addEventListener("input", () => {

    const hasCharactereRegex = /\D+/g

    amount.value = amount.value.replace(hasCharactereRegex, "")
})


//Capturando o evendo de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()


    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break
    }

}


//Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        //Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCUrrencyBRL(price)}`
        //Calcula o total
        let total = amount * price 

        //VErifica se o resultado não Sé um número
        if(isNaN(total)){
            console.log("Por favor.Digite o valor corretamente para converter.")
        }
        //Formata o valor total .
        total = formatCUrrencyBRL(total).replace("R$", "")
        //Exibe o resultado total
        result.textContent = total

        //Aplica a classe que aplica o footer para mostrar o resultado
        footer.classList.add("show-result")




    } catch (error) {
        console.error(error)

        //Remove a classe do footer removendo ele da tela
        footer.classList.remove("show-result")
        alert("Não foi possível converter, tente novamente mais tarde.")

    }

}

//Formata a moeda em Real Brasileiro
function formatCUrrencyBRL(value) {
    //Converte para número pra utilizar o toLocaleString para formatar para o pradão BRL (R$ 00,00).
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}




