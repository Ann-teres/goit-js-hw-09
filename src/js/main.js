import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const galleryLink = document.querySelector('a[href="/1-gallery.html"]');
  const formLink = document.querySelector('a[href="/2-form.html"]');
  
  galleryLink.addEventListener('click', (e) => {
    console.log("Redirecting to Gallery");
  });
  
  formLink.addEventListener('click', (e) => {
    console.log("Redirecting to User Form");
  });

});

