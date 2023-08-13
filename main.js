//Metodos para seleccionar los elementos que tenemos en el html
//QuerySelectorAll - selecciona todas las etiquetas de ese mismo tipo 

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);

//////////////////////////////////////////////////////////////////////

//Modificar el html que este dentro de la etiqueta que estamos seleccionando
h1.innerHTML = "Patito <br> feo" //Convierte todo a codigo html
h1.innerText = "Patito <br> feo" //Convierte todo a texto
console.log(h1.getAttribute('pantalla')) //Acceder a un atributo
h1.setAttribute("pantalla","rojo")//Modificar los atributos del html

h1.classList.add("title")//Agregar una clase
h1.classList.remove("title")//Remover una clase
h1.classList.toggle("title")//Agregar y quitar una clase (util para los menu hamburgesa)
h1.classList.contains("title")//Devuelve true o false dependiendo si el elemento tiene la clase que estamos preguntando

input.value = 456 //Poner el valor por defecto del input

//Crear un elemento desde cero
const img = document.createElement("img") //Se crea la imagen
img.setAttribute("src", "https://i.imgur.com/A8tLv6k.jpeg")//Se le pusieron los atributos
console.log(img)

//Asignar esta etiqueta a otra
pid.innerHTML = "" //Se elimina el contenido, solo muestra la img agregada 
pid.append(img)//insertar la imagen dentro de otro elemento que ya existia
//append agrega el elemento despues del contenido