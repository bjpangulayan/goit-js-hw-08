import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector("ul.gallery");

function createGalleryItem(galleryItems) {
    return galleryItems.map((galleryItem) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}"/>
            </a></li>`
         })
        .join("");
}

const photosMarkup = createGalleryItem(galleryItems); 
galleryContainer.insertAdjacentHTML("beforeend", photosMarkup);

const galleryHandler = new SimpleLightbox(".gallery a", {captionsData: "alt", captionDelay: 250});
galleryHandler.on("show.simplelightbox");