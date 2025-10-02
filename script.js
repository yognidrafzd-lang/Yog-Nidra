// Get elements
/*const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

// Open lightbox when an image is clicked
galleryImages.forEach(image => {
  image.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImage.src = image.src;
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside of the image
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
*/

const images = document.querySelectorAll('.gallery img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        let currentIndex = 0;

        function openLightbox(index) {
            currentIndex = index;
            lightboxImg.src = images[currentIndex].src;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
        }



        /*function closeLightboxOutside(event) {
          if (!lightboxImg.contains(event.target)) {
              closeLightbox();
          }
      }*/
      

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
        }


        /* Close the lightbox when the close button is clicked
        lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
        });

        // Close the lightbox when clicking outside of the image
        lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
         lightbox.style.display = 'none';
           }
        });*/


