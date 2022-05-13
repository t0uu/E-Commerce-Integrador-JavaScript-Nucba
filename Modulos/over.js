const Logo = document.getElementById('Logo');
const background = document.getElementById('background')
const ViewCart = document.getElementById('ViewCart');
const View = document.getElementById('View')
Logo?.addEventListener('mouseover', () => {
    background.style.backgroundImage = "url(/assets/Productos-Imagenes/jim-makos-bYy09RkQW8w-unsplash.jpg)"
    background.style.transition = '0.7s'
    ViewCart.style.filter = 'invert(100%)'
    Logo.style.filter = 'invert(100%)'
    View.style.filter = 'invert(100%)'
    
})
Logo?.addEventListener('mouseout',()  =>{
        background.style.backgroundImage = "url(/assets/Productos-Imagenes/timothy-rose-y_ruHTHq-8U-unsplash.jpg)"
        background.style.transition = '0.7s'
        ViewCart.style.filter = 'invert(0%)'
        Logo.style.filter = 'invert(0%)'
        View.style.filter = 'invert(0%)'
})