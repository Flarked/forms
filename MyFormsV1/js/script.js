const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');

//Все элементы управления формы как бы глубоко они не находились в форме доступны в коллекции form.elements

sendButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Name: ', myForm.elements.name.value);
    console.log('Lastname: ', myForm.elements.lastName.value);
    if (myForm.elements.gender.value == 'm') {
        console.log('Man');
    } else {
        console.log('Woman')
    }


    if (myForm.elements.auto.checked) {
        console.log('Have car');
    } else {
        console.log('Have not car')
    }

})