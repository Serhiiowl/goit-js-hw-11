import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function searchImages(query) {
  if (!query.trim()) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query.'
    });
    return; // Переривання функції, якщо запит пустий
  }

  const apiKey = '43240893-11f4c283658d10faa10d034ff';
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.hits && data.hits.length > 0) {
        // Тут можна додати код для обробки масиву зображень
        console.log(data.hits);
      } else {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!'
        });
      }
    })
    .catch(error => {
      console.error('Error executing a query:', error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching the images.'
      });
    });
}

// Додайте обробник подій для форми пошуку
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const query = document.getElementById('searchQuery').value;
  searchImages(query);
});
