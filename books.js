let search = document.querySelector('.search-icon i');
let form = document.querySelector('.search-form');
search.onclick = () => {
  form.classList.toggle('active');
}