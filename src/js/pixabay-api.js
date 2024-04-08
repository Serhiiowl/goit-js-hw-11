// Імпорт iziToast для повідомлень
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт функції displayImages з модуля displayImages
import { displayImages } from './render-functions';

// Функція для показу завантажувача
function showLoader() {
  document.getElementById('loader').classList.add('active');
}

// Функція для приховування завантажувача
function hideLoader() {
  document.getElementById('loader').classList.remove('active');
}

// Функція для пошуку зображень через API
function searchImages(query) {
  showLoader(); // Активувати завантажувач
  if (!query.trim()) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.'
    });
    hideLoader(); // Приховати завантажувач, якщо запит пустий
    return;
  }

  // API ключ та URL
  const apiKey = '43240893-11f4c283658d10faa10d034ff';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  // Отримання даних з API
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      hideLoader(); // Приховати завантажувач після отримання даних
      if (data.hits && data.hits.length > 0) {
        displayImages(data.hits);
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
      }
    })
    .catch(error => {
      hideLoader(); // Приховати завантажувач у разі помилки
      console.error('Error executing a query:', error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching the images.'
      });
    });
}

// Обробник подій для форми пошуку
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('searchQuery').value;
  searchImages(query);
});
