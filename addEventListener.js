const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

//Se especifica el nombre del evento y el nombre de la funcion que debe mandar a llamar 
// btn.addEventListener('click', btnOnClick);
// function btnOnClick()
// {
//     result = parseInt(input1.value) + parseInt(input2.value)
//     pResult.innerText = "Resultado: " + result;
//     console.log(result)
// }

// form.addEventListener('submit', sumarInputValues);
// function sumarInputValues(event)
// {
//     event.preventDefault();//No ejecuta por defecto lo que se deberia ejecutar, es decir, recargarse
//     result = parseInt(input1.value) + parseInt(input2.value)
//     pResult.innerText = "Resultado: " + result;
//     console.log(result)
// }


//Para no tener que anadir el event prevent se le puede cambiar el tipo al btn en el html
//y aqui anadir el evento de click
btn.addEventListener('click', sumarInputValues);
function sumarInputValues()
{
    result = parseInt(input1.value) + parseInt(input2.value)
    pResult.innerText = "Resultado: " + result;
    console.log(result)
}