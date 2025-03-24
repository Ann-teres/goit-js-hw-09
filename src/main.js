document.addEventListener('DOMContentLoaded', () => {
  const galleryFolder = document.querySelector('a[href="/1-gallery.html"]');
  const formFolder = document.querySelector('a[href="/2-form.html"]');
  
  galleryFolder.addEventListener('click', (e) => {
    console.log("Redirecting to Gallery");
  });
  
  formFolder.addEventListener('click', (e) => {
    console.log("Redirecting to User Form");
  });

});