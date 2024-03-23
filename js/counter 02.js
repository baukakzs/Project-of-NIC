// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {
    // Находим обертку счетчика
    const counterWrapper = event.target.closest('.counter-wrapper')

    // Находим див с числом счетчика
    const counter = counterWrapper.querySelector('[data-counter]')



    if (event.target.dataset.action === 'plus') {

        counter.innerText = ++counter.innerText
    }

    if (event.target.dataset.action === 'minus') {

        // Проверка счетчика больше
        if (parseInt(counter.innerText) > 1) {
            // Изменяем текст в счетчике уменьшая на 1 
            counter.innerText = --counter.innerText
        }
    }
})