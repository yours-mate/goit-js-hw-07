import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    galleryItem =>
      `<div class="gallery__item">
  <a class="gallery__link" href='${galleryItem.original}' >
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</div>`
  )
  .join('');

let modal;

galleryEl.innerHTML = markup;

galleryEl.addEventListener('click', onClickGalleryItemHandle);

function onClickGalleryItemHandle(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  modal = basicLightbox.create(`<img src='${evt.target.dataset.source}'>`);
  modal.show();
}

window.addEventListener('keydown', EscKeyHandle);

function EscKeyHandle(evt) {
  if (!basicLightbox.visible()) {
    return;
  }
  if (evt.code === 'Escape') {
    modal.close();
  }

  console.log(evt.code);
}
