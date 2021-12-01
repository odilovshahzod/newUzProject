window.addEventListener('DOMContentLoaded',function(){
  const products = document.querySelectorAll('tr'),
    buttons = document.querySelectorAll('.buttons'),
    openBtn = document.querySelector('.open'),
    table = document.querySelector('table'),
    tovarNamber = document.querySelector('.tovar-namber'),
    tovarSumma = document.querySelector('.tovar-summa'),
    summaConatiner = document.querySelector('.summa-container'),
    pusto = document.querySelector('.pusto'),
    summa = document.querySelectorAll('table tr td:nth-last-child(3)');

 function createCart() {
    let cart = document.createElement('div'),
      field = document.createElement('div'),
      header =document.createElement('div'),
  
      heading = document.createElement('h2'),
      closeBtn = document.createElement('button');

    cart.classList.add('cart')
    field.classList.add('cart-field')
    closeBtn.classList.add('close')
    header.classList.add('header-js')
    heading.textContent = "Корзина"
    closeBtn.textContent = 'Закрыть'

    document.body.appendChild(cart)
    cart.appendChild(field)
    field.appendChild(header)
    header.appendChild(heading)
    header.appendChild(closeBtn)
  }
createCart()
    tovarNamber.textContent="0"
    tovarSumma.textContent="0"

  let cart = document.querySelector('.cart'),
    closeBtn = document.querySelector('.close'),
    field = document.querySelector('.cart-field')

  openBtn.addEventListener('click', function () {
    cart.style.display = 'block'
  })
  closeBtn.addEventListener('click', function () {
    cart.style.display = 'none'
  })
    let n=0;
    let m=0;
    buttons.forEach(function (item, i) {
    item.addEventListener('click', function () {
      let cloneItem = products[i].cloneNode(true),
        btn = cloneItem.querySelector('.buttons');
        pusto.style.display='none'
        summaConatiner.style.display='block'
         n=n+1;
          m=m+parseInt(summa[i].textContent)
        tovarNamber.textContent=n;
        tovarSumma.textContent=m;
      btn.remove()
      field.appendChild(cloneItem)
      // products[i].remove()
    })
  })
})