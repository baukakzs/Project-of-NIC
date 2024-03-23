// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // Обьявляем переменную для счетчика
    let counter;

    // проверка клик строго по кнопкам
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper')

        // Находим див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]')
    }


    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText
    }

    // Проверяем является ли элемент по которому был совершен клик кнопкой минус
    if (event.target.dataset.action === 'minus') {


        // Проверка счетчика больше
        if (parseInt(counter.innerText) > 1) {
            // Изменяем текст в счетчике уменьшая на 1 
            counter.innerText = --counter.innerText
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            console.log('IN CART!!!');
            // remove product in cart
            event.target.closest('.cart-item').remove()

            // Отображение статуса корзины полная или пустая
            toggleCardStatus()

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery()
        }
    }

    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery()
    }

})