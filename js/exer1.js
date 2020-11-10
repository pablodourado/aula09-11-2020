document.querySelector("#botao").addEventListener("click", ()=>{
    let n1=parseInt(document.getElementById("n1").value);
    let n2=parseInt(document.getElementById("n2").value);
    let n3=parseInt(document.getElementById("n3").value);
    let n4=parseInt(document.getElementById("n4").value);
    let q1,q2,q3,q4;
    /* console.log é para ver o resultado em inspecionar */
    console.log("valor de q3-linha7= "+q3);
    q3= Math.pow(n3,2);
    console.log("valor de q3-linha9= "+q3);

    if(q3>=1000) {
        document.getElementById("resposta").innerHTML= q3;
    }
    else {
        q1=Math.pow(n1,2);
        q2=Math.pow(n2,2);
        q4=Math.pow(n4,2);

        resposta=n1+" quadradro = "+q1+"<br>"+
        n2+" quadradro = "+q2+"<br>"+
        n3+" quadradro = "+q3+"<br>"+
        n4+" quadradro = "+q4;
        
        document.getElementById("resposta").innerHTML=resposta;
    }
})