const grid = new Muuri('.grid',{
    layout:{
        rounding:false
    }
})
/*---------------Cargue de imagenes--------------*/
window.addEventListener('load', () => {
    grid.refreshItems().layout();
    grid.filter(`[data-categoria="mundo ilustrado"]`);
    document.getElementById('grid').classList.add('imagenes-cargadas');

/*-------------Visualizacion de la ventana del perfil al dar click-------------*/
const perfil = document.getElementById('perfil');
const botones = document.querySelectorAll('.inicio .intereses-y-redes button');
//const lampara = document.querySelector('.ambiente .lampara');

botones.forEach(function (boton) {
    boton.addEventListener('click', function () {
        perfil.classList.add('activo');
       // lampara.classList.add('activo');  // Agrega la clase 'activo' a la lámpara
    });
});

document.querySelector('#boton-cerrar-popup').addEventListener('click', () => {
    perfil.classList.remove('activo');
    //lampara.classList.remove('activo');  // Elimina la clase 'activo' de la lámpara
});
});
/*---------------Indicador de color ----------------*/
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => { elemento.addEventListener('click', (evento) => {
        evento.preventDefault();
        enlaces.forEach((enlaces)=> enlaces.classList.remove('activo'));
        evento.target.classList.add('activo');

/*-----  --- visualizacion de las imagenes segun la categoria---------*/
    const categoria = evento.target.innerHTML.toLowerCase();
       categoria === 'todos' ? grid.filter('[data-categoria]') : 
       grid.filter(`[data-categoria="${categoria}"]`);
       });
   
   /*-------------Visualizacion de imagenes al dar click-------------*/
   const overlay = document.getElementById('overlay');
   document.querySelectorAll('.grid .item img').forEach((elemento)=>{
   elemento.addEventListener('click', ()=>{ 
    const ruta= elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
   
       overlay.classList.add('activo');
       document.querySelector('#overlay img').src = ruta;
       document.querySelector('#overlay .descripcion').innerHTML = descripcion;
         });
});


   /*---------------- boton de cerrar la imagen------------- */

   document.querySelector('#btn-cerrar-popup').addEventListener('click', () =>{
    overlay.classList.remove('activo');
   })
});
