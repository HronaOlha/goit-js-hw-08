// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const galleryItem = createGalleryItems(galleryItems);
gallery.insertAdjacentHTML('beforeend', galleryItem);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    `
    )
    .join('');
}

new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});
