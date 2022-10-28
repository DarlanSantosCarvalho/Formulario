const enviar = document.getElementById('submit');

const campoDeFormulario = document.querySelectorAll('.formulario');

const invalido = document.querySelectorAll('.invalido');

console.log(campoDeFormulario)

console.log(invalido)

enviar.addEventListener('click', function(){
    campoDeFormulario.forEach(function(input){
        if(input.value == ""){
            input.classList.add('campo-vazio')
            input.classList.add('invalido')
            input.nextElementSibling.classList.remove('oculto')
        }else{
            input.classList.remove('campo-vazio')
            input.classList.add('campo-preenchido')
        }
    })
})