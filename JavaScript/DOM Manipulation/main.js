var button = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.querySelector('ul');

button.addEventListener('click', function() {
    if (input.value.length > 0) {
    console.log(input.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    }
    input.value = "";
})

input.addEventListener('keydown', function(event) {
    if (input.value.length > 0 && event.which === 13) {
    console.log(input.value);
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    }
    input.value = "";
})