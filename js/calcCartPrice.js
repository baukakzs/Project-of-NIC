function calcCartPriceAndDelivery(){

    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElements = cartWrapper.querySelectorAll('.price__currency')
    const totalPriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    let priceTotal = 0 

    priceElements.forEach(function(item){
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]')
        

        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)
    })

    totalPriceEl.innerText = priceTotal

    // Скрываем или показываем блок с стоимостью доставки
    if(priceTotal > 0){
        cartDelivery.classList.remove('none')
    }else{
        cartDelivery.classList.add('none')

    }
 
    // Указываем стоимость доставки
    if(priceTotal >= 3000){
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'Бесплатно'
    }else{
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '1250 KZT'

    }

    // const cartItems = document.querySelectorAll ('.cart-item')

    // let totalPrice = 0

    // cartItems.forEach(function(item){
    //     const amountEl = item.querySelector('[data-counter]')
    //     const priceEl = item.querySelector('.price__currency')
    //     const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
    //     totalPrice += currentPrice
    // })

    // console.log(totalPrice);
}