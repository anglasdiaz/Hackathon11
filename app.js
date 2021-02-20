const btnRemove = document.querySelector('#btn-remove');
const cartDropDown = document.querySelector('.cart-dropdown');
const cartCourse = document.querySelector('.cart-course');
const btnVaciarCarrito = document.querySelector('#btn-remove-all');
// const total = document.querySelectorAll('.total');

const courses = document.querySelectorAll('.courses');

cartDropDown.addEventListener('click', function (e) {
    if (e.target.id === 'btn-remove') {
        e.target.parentElement.remove();
    }
})

for (let i = 0; i < courses.length; i++) {
    courses[i].addEventListener('click', function (e) {
        if (e.target.id === 'addShop') {
            e.stopPropagation();
            const curso = e.target.parentElement.parentElement;
            extraerDatos(curso);
        }

    })

}

function extraerDatos(curso) {
    const cursoElegido = {
        nombre: curso.querySelector('.course-name').textContent,
        precio: curso.querySelector('#coursePrice').textContent
    }
    pintarCursos(cursoElegido);
}

function pintarCursos(curso) {
    const container = document.createElement('div');
    const nombre = document.createElement('p');
    const precio = document.createElement('p');
    const cantidad = document.createElement('p');
    const button = document.createElement('button');
    // nombre.classList.add('add-course-name');
    // precio.classList.add('add-course-price');
    container.classList.add('add-course');
    nombre.textContent = curso.nombre;
    precio.textContent = curso.precio;
    cantidad.textContent = 1;
    button.id = 'btn-remove';
    button.classList.add('btnRemoveStyle');
    button.innerText = 'x';

    container.append(nombre, precio, cantidad, button);
    cartCourse.append(container);
}

btnVaciarCarrito.addEventListener('click', function (e) {
    const addCourse = document.querySelectorAll('.add-course');
    for (let i = 0; i < addCourse.length; i++) {
        addCourse[i].remove();
    }
})

