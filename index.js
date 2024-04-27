// Функция для открытия модального окна
function openModal() {
  document.getElementById('myModal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Функция для открытия модального окна
function openModal1() {
  document.getElementById('myModal1').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal1() {
  document.getElementById('myModal1').style.display = 'none';
}

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

document.getElementById('hideButton').addEventListener('click', function() {
  var element = document.getElementById('element');
  element.style.display = 'none'; // Изменяем стиль на "none", чтобы сделать элемент невидимым
});
