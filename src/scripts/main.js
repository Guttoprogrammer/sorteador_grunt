document.addEventListener('DOMContentLoaded', function (){
    document.getElementById('form-sorteador').addEventListener('submit',function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = 1 + Math.random() * numeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block'
    })
})