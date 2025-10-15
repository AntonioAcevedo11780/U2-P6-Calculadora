const inputLado = document.getElementById('lado');
const mensaje = document.querySelector('.mensaje p');
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', function () {

    const valorLado = parseFloat(inputLado.value);

    if (!isNaN(valorLado) && valorLado > 0) {

        const area = valorLado * valorLado;
        mensaje.textContent = "El área es: " + area;
        mensaje.style.color = '#307c43ff';

    } else {

        mensaje.textContent = "Ingresa un valor válido";
        mensaje.style.color = '#bb2121ff';
        
    }

});
