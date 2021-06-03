// funcao que eh acionada pelo clique do botao calcular do site
let calcIMC = document.getElementById('btnCalcular');

function calculandoIMC(){
    let peso = document.getElementById('numberPeso').value;
    let altura = document.getElementById('numberAltura').value/100;
    let resultado = document.getElementById('resultado');

    if(altura != "" && peso != ""){
        let imc = (peso/(altura*altura)).toFixed(2);
        let msg = "";
        if(imc < 17){
            msg = "Muito abaixo do peso"
        }else if(imc < 18.5){
            msg = "Abaixo do peso";
        }else if(imc < 25){
            msg = "Peso normal";
        }else if(imc < 30){
            msg = "Acima do peso";
        }else if(imc < 35){
            msg = "Obesidade Grau I";
        }else if(imc < 40){
            msg = "Obesidade Grau II";
        }else if(imc >= 40){
            msg = "Obesidade Grau III";
        }
        resultado.setAttribute('style', 'white-space: pre;');
        resultado.textContent = `Seu IMC é ${imc},\r\n ${msg}.`;
    }else{
        resultado.textContent = "Por gentileza, preencha todos os campos."; 
    }
}

calcIMC.addEventListener('click', calculandoIMC);
