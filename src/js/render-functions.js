    // Описаний у документації
    import SimpleLightbox from "simplelightbox";
    // Додатковий імпорт стилів
    import "simplelightbox/dist/simple-lightbox.min.css";

export function displayImages(images) {


function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; 
  
    images.forEach(image => {
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      link.href = image.largeImageURL;
      link.setAttribute('data-lightbox', 'gallery');
      const img = document.createElement('img');
      img.src = image.webformatURL;
      img.alt = image.tags;
      link.appendChild(img);
      listItem.appendChild(link);
      gallery.appendChild(listItem);
    });
  
    // Ініціалізація SimpleLightbox
    new SimpleLightbox('.gallery a', { /* опції */ });
  }}