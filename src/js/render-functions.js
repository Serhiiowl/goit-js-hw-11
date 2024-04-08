// Імпорт SimpleLightbox для галереї
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Функція для відображення галереї зображень
export function displayImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const listItem = document.createElement('li');
    listItem.classList.add('gallery-item');

    const anchor = document.createElement('a');
    anchor.href = image.largeImageURL;
    anchor.setAttribute('data-lightbox', 'gallery');
    const img = document.createElement('img');
    img.src = image.webformatURL;
    img.alt = image.tags;
    anchor.appendChild(img);
    listItem.appendChild(anchor);

    // Створення контейнера для інформації зображення
    const infoContainer = document.createElement('div');
    infoContainer.classList.add('image-info');
    infoContainer.style.display = 'flex';
    infoContainer.style.justifyContent = 'space-around';
    infoContainer.style.alignItems = 'center';

    // Створення та додавання підписів та значень
    const likesDiv = document.createElement('div');
    likesDiv.innerHTML = `<strong>Likes</strong><br>${image.likes}`;
    const viewsDiv = document.createElement('div');
    viewsDiv.innerHTML = `<strong>Views</strong><br>${image.views}`;
    const commentsDiv = document.createElement('div');
    commentsDiv.innerHTML = `<strong>Comments</strong><br>${image.comments}`;
    const downloadsDiv = document.createElement('div');
    downloadsDiv.innerHTML = `<strong>Downloads</strong><br>${image.downloads}`;

    // Додавання елементів до контейнера
    infoContainer.appendChild(likesDiv);
    infoContainer.appendChild(viewsDiv);
    infoContainer.appendChild(commentsDiv);
    infoContainer.appendChild(downloadsDiv);

    listItem.appendChild(infoContainer);
    gallery.appendChild(listItem);
  });

  // Ініціалізація SimpleLightbox
  new SimpleLightbox('.gallery a', {});
}

// Ініціалізація SimpleLightbox для нових елементів галереї
document.addEventListener('DOMContentLoaded', () => {
  new SimpleLightbox('.gallery a',{ captions: true,
  captionSelector: 'img', 
  captionType: 'attr', 
  captionsData: 'alt', 
  captionPosition: 'bottom', 
  captionDelay: 250, 
  enableKeyboard: true, 
  loop: true  });
});
