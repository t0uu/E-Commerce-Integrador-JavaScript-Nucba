const buttonOpen = document.getElementById('View');
const buttonClose = document.getElementById('Cruz');
const Barlist = document.getElementById('Barlist');

const CartBag = document.getElementById('CartBag');
const ViewCart = document.getElementById('ViewCart');
const CloseCart = document.getElementById('CloseCart');
const navMobile = document.getElementById('NavMobile');
export function NavbarView() {
    navMobile.addEventListener('click' , e => {
      const x = window.matchMedia("(min-width:768px)")
        if(e.target === buttonOpen && x.matches){
            Barlist.style.width = '40%';
        }else if(e.target === buttonClose){
            Barlist.style.width = '0%';
        }
        if(e.target === ViewCart && x.matches){
          CartBag.style.width = '30%';
        }else if (e.target === CloseCart){
          CartBag.style.width = '0%';
        }
        
        if(e.target === buttonOpen && !x.matches){
          Barlist.style.width = '100%';
        }else if(e.target === buttonClose){
          Barlist.style.width = '0%';
        }
        if(e.target === ViewCart && !x.matches){
          CartBag.style.width = '100%';
        }else if(e.target === CloseCart){
          CartBag.style.width = '0%';
        }
    })    
}

