const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.image-light')
const hamburguer1 = document.querySelector(".hamburguer");

imagenes.forEach(imagen=>{
    imagen.addEventListener('click',()=>{
        aparacerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click',(e)=>{
    console.log(e.target)
    if(e.target!=imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')  
        hamburguer1.style.opacity = '1'  
    }
})

const aparacerImagen = (imagen)=>{
    imagenLight.src=imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}