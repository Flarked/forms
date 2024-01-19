const myButton = document.querySelector('#myButton')
const nameInput = document.querySelector('#nameInput')
const list = document.querySelector('#list')

myButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('test')
})