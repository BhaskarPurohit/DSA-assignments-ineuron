const modal = document.getElementById('myModal');

function openModal() {
  modal.style.display = 'block';
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open');
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};
