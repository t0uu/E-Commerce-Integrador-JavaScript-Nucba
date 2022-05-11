const ContainerProduct = document.getElementById('ContainerProduct')
const Carrito = document.getElementById('carrito');
const TotalProductos = document.getElementById('TotalProductos');
const TotalItems = document.getElementById('TotalItems');


function RenderProductos(){
  ContainerProduct.innerHTML = ''
 Productos.forEach((product) =>{
  const {Imagen,Titulo,Precio,id,Categoria} = product
  ContainerProduct.innerHTML += `  
    <div class="Product-Section" data-tipo="${Categoria}">
    <img src="${Imagen}" class="ImgProduct">
    <div class="TextProduct"> 
    <strong>${Titulo}</strong>
    <span class="precio">$${Precio}</span>
    </div>
   <button class="addCart" onclick="addToCart(${id})">Agregar al Carrito</button>
    </div>
    `;
  });

}
RenderProductos();

function RemerasView(){
  gsap.fromTo(ContainerProduct, {opacity: 0}, {opacity: 1, duration: 1})
  ContainerProduct.innerHTML = ''
  const Remeras = Productos.filter((productos) => productos.Categoria == "Remera")

  Remeras.forEach((Remeras) => {
    ContainerProduct.innerHTML += `  
    <div class="Product-Section" data-tipo="${Remeras.Categoria}">
    <img src="${Remeras.Imagen}" class="ImgProduct">
    <div class="TextProduct"> 
    <strong>${Remeras.Titulo}</strong>
    <span class="precio">$${Remeras.Precio}</span>
    </div>
   <button class="addCart" onclick="addToCart(${Remeras.id})">Agregar al Carrito</button>
    </div>
    `;

  })
}

function JacketView(){
  ContainerProduct.innerHTML = ''
  const Jacket = Productos.filter((productos) => productos.Categoria == "Jacket")

  Jacket.forEach((Jacket) => {
    gsap.fromTo(ContainerProduct, {opacity: 0}, {opacity: 1, duration: 1})
    ContainerProduct.innerHTML += `  
    <div class="Product-Section" data-tipo="${Jacket.Categoria}">
    <img src="${Jacket.Imagen}" class="ImgProduct">
    <div class="TextProduct"> 
    <strong>${Jacket.Titulo}</strong>
    <span class="precio">$${Jacket.Precio}</span>
    </div>
   <button class="addCart" onclick="addToCart(${Jacket.id})">Agregar al Carrito</button>
    </div>
    `;

  })
}
function HoodieView(){
  ContainerProduct.innerHTML = ''
  const Hoodie = Productos.filter((productos) => productos.Categoria == "Hoodie")

  Hoodie.forEach((Hoodie) => {
    gsap.fromTo(ContainerProduct, {opacity: 0}, {opacity: 1, duration: 1})
    ContainerProduct.innerHTML += `  
    <div class="Product-Section" data-tipo="${Hoodie.Categoria}">
    <img src="${Hoodie.Imagen}" class="ImgProduct">
    <div class="TextProduct"> 
    <strong>${Hoodie.Titulo}</strong>
    <span class="precio">$${Hoodie.Precio}</span>
    </div>
   <button class="addCart" onclick="addToCart(${Hoodie.id})">Agregar al Carrito</button>
    </div>
    `;

  })
}






// Iniciar Array vacío para agregar los Productos
let Cart = [];
updateCart()
// Add To Cart
function addToCart(id){
  //El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
  if(Cart.some((item) => item.id === id)){
    swal('El producto ya esta en el Carrito, ¡Podes Sumar más productos desde el Carrito!');
  }else{
    const item = Productos.find((product) => product.id === id);
    Cart.push({...item})
    console.log(Cart)
  }

  updateCart();
}




function updateCart(){
  renderCartItems();
  renderSubtotal();
}

function renderSubtotal(){
  let totalPrice = 0;
  let totalItems = 0;

  Cart.forEach((item) => {
    totalPrice += item.Precio * item.Cantidad;
    totalItems += item.Cantidad;
  })
  TotalProductos.innerHTML = `Precio Total: $${totalPrice.toFixed(1)} <button class="addCart">Iniciar Compra</button>`
  TotalItems.innerHTML = totalItems;
}



function renderCartItems(){
  Carrito.innerHTML = '';
  
  Cart.forEach((item) => {
    Carrito.innerHTML += `
    <div class="ContainerCart">
    <div class="ContainerImgTrash">
    <img src="${item.Imagen}" class="ImgCart">
    </div>
    <div class="ContenedorSumResta">
    <h2>${item.Titulo}</h2>
    <span class="Precio">$${item.Precio}</span>
    <div class="BoxCantidad">
    <button class="btn min" onclick="CambiarNumero('minus', ${item.id})">-</button>
    <div class="number">${item.Cantidad}</div>
    <button class="btn plus" onclick="CambiarNumero('plus', ${item.id})">+</button>
    <img src="/assets/Icons/trash-solid.svg" class="trash" onclick="borrarProducto(${item.id})">
    </div>
    </div>
    </div>
    `
  });
}

function borrarProducto(id){
  Cart = Cart.filter((item) => item.id !== id);
  updateCart();
}


function CambiarNumero(action, id){
  Cart = Cart.map((item) => {
    let CantidadAnterior = item.Cantidad
    if(item.id === id){
      if(action === "minus" && CantidadAnterior > 1){
        CantidadAnterior--;
      }else if(action === "plus"){
        CantidadAnterior++;
      }
    }
    return {
      ...item,
      Cantidad: CantidadAnterior,
    };
  })
  updateCart();
}


const Filtrar = document.getElementById('Filtrar')
const ContainerBtns = document.getElementById('ContainerBtns');
Filtrar.addEventListener('click', ()=>{
  if(ContainerBtns.classList.contains('switchContainerBtns')){
    Filtrar.innerHTML = 'Filter \&darr;'
    ContainerBtns.classList.remove('switchContainerBtns')
    gsap.fromTo(ContainerBtns, {opacity: 0}, {opacity: 1, duration:3})
  }else{

    ContainerBtns.classList.add('switchContainerBtns')
    Filtrar.innerHTML = 'Filter \&uarr;'
  }
})