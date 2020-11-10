document.querySelector("#btn").addEventListener("click",()=>{
    let qtd = parseInt(document.getElementById("qtd").value)
    let preco= parseFloat(document.getElementById("preco").value)
    let total= qtd * preco;
    document.getElementById("total").value=total;
    let desc;
    let totalpagar;
    if (qtd<=5){
        desc= (2 * total) / 100;
        totalpagar= total - desc;
    }   if (qtd=10) {
        desc= (3 * total) / 100;
        totalpagar= total - desc;
        }
        else{
            desc= (5 * total) / 100;
            totalpagar= total - desc;
        }
    total=total.toLocaleString("pt-br", { style: "currency", currency:"BRL"});
    desc=desc.toLocaleString("pt-br", { style: "currency", currency:"BRL"});
    totalpagar=totalpagar.toLocaleString("pt-br", { style: "currency", currency:"BRL"});
    document.getElementById("desc").value=desc
    document.getElementById("totalpagar").value=totalpagar;
    
})