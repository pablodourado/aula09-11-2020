document.querySelector("#botao").addEventListener("click", () =>{
    // alterando a cor da fonte pelo js 
    // getElementsByTagName pode pegar mais de um elemento (ele é um array que começa na posição 0)
    document.getElementsByTagName("h1")[0].style.color="blue";
    document.getElementsByTagName("h1")[1].style.color="orange";

    // tabuada
    let resultado, resposta=" ";
    let num=parseInt(document.getElementById("num").value);

    for(let i=1; i<=10; i++){
        resultado = num * i;
        resposta = resposta+ num+" x "+i+" = "+ resultado+" <br>";
    }
    document.getElementById("resposta").innerHTML=resposta;
})