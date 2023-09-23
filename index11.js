let table = document.querySelector('#table');
let td = document.querySelectorAll('td');
for (let el of td) {
  el.addEventListener('click', function f () {
let input = document.createElement('input');
input.value = el.textContent;
el.textContent = '';
el.appendChild(input);
input.addEventListener('blur', function() {
  el.textContent = this.value;
  el.addEventListener('click', f);
});
el.removeEventListener('click', f);
  });
}
