// Variables
const resultado = document.querySelector('#resultado');
const musculo = document.querySelector('#musculo');
const tipo = document.querySelector('#tipo');
const nivel = document.querySelector('#nivel');
const titulo = document.querySelector('#titulo');

const datosBusqueda = {
    musculo: '',
    tipo: '',
    nivel: ''
};


document.addEventListener('DOMContentLoaded', ()=>{
    mostrarEjercicios(ejercicios);
});

musculo.addEventListener('change', e=>{
    datosBusqueda.musculo = e.target.value;
    filtrarEjercicios();

    titulo.textContent = `Ejercicios para ${e.target.value}`;
    
});

tipo.addEventListener('change', e=>{
    datosBusqueda.tipo = e.target.value;
    filtrarEjercicios();
});
nivel.addEventListener('change', e=>{
    datosBusqueda.nivel = e.target.value;
    filtrarEjercicios();
});


function mostrarEjercicios(ejercicios) {

    limpiarHTML();

    ejercicios.forEach( ejercicio =>{

        const { nombre, tipo, nivel } = ejercicio;

        const ejercicioHTML = document.createElement('p');
        ejercicioHTML.textContent = `
        ${nombre} - ${tipo} - nivel ${nivel}
        
        `;

        resultado.appendChild(ejercicioHTML);
    })
};


function filtrarEjercicios(){

    limpiarHTML();

    const resultado = ejercicios.filter( filtrarMusculo).filter(filtrarTipo).filter( filtrarNivel);


    if(resultado.length){
        mostrarEjercicios(resultado)
    }else{
        noResultado();
    }
};

function filtrarMusculo(ejercicio){
    const {musculo} = datosBusqueda;
    if( musculo){
        return ejercicio.musculo === musculo
    }
    return ejercicio
};
function filtrarTipo(ejercicio){
    const {tipo} = datosBusqueda;
    if( tipo){
        return ejercicio.tipo === tipo
    }
    return ejercicio
};
function filtrarNivel(ejercicio){
    const {nivel} = datosBusqueda;
    if(nivel){
        return ejercicio.nivel === nivel
    }
    return ejercicio
};


function limpiarHTML(){
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    };
};


function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = `No se encontraron resultados para esa busqueda, intenta con otra`;
    resultado.appendChild(noResultado)
}