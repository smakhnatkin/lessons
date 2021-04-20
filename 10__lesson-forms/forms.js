console.log('Формы');

// const handlerClick = () => {};






const form = document.forms.products; 
const { name, price, delivery } = form.elements; 

name.onblur = () => {
   console.log('Потеря фокуса');
}
name.onfocus = () => {
   console.log('Фокус в поле ввода');
}
name.onchange = ({ target: { value } }) => {
   console.log('Текущее значение поля ввода: ', value);
}









// name.onblur = function() {
//     console.log(name.value);
// }


// document.querySelector('.products').addEventListener('submit', event => {
//     event.preventDefault();
//     console.log();
// });










const sum = (a, b) => a + b; // js
const Sum = ({ a, b }) => <div>{a + b}</div>; // React

