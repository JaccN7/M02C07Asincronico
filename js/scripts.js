//JavaScript Básico - Ejercicio asincrónico 02
const titulo = document.querySelector('#titulo');
titulo.textContent = 'Titulo usando textContent';

const segundoTitulo = document.querySelector('#segundoTitulo');
segundoTitulo.innerHTML = '<p>Esto era originalmente un titulo, pero ahora es un parrafo usando innerJoin</p>'; //De esta forma se cambia la etiqueta h1 por p
const parrafo = document.createElement('p');
parrafo.textContent = 'Ut irure pariatur et fugiat amet enim et. Occaecat minim consectetur esse quis ut officia laborum ut quis pariatur aliqua esse sunt. Sunt deserunt dolor pariatur exercitation occaecat cupidatat consectetur laborum ut pariatur consequat est nulla. Enim aliquip adipisicing incididunt do non officia voluptate irure ullamco laborum. Proident incididunt culpa velit ullamco.';
document.body.appendChild(parrafo);

//JavaScript Básico - Ejercicio asincrónico 03
//cuadrado.innerHTML = '<div style="width: 200px; height: 200px; background-color: blue;"></div>'; 
//Para poder utilizar syle lo utlice dentro del tag de un un nuevo div

const cuadrado = document.querySelector('#seccionStyle').classList.add('square');

const figura = document.querySelector(".square");

//El método llama a una función a intervalos especificados (en milisegundos).setInterval()
setInterval(
    function () {
        figura.classList.toggle('square');
    }, 1000);