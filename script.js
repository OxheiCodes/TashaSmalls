$(document).ready(function() {
    // Lightbox
    $('[data-toggle="lightbox"]').on('click', function(event) {
      event.preventDefault();
      $(this).ekkoLightbox();
    });
  
    // Get all image links
    var imageLinks = $('[data-toggle="lightbox"]');
  
    // Track the index of the current image
    var currentIndex = 0;
  
    // Function to update the lightbox image
    function updateLightboxImage() {
      var currentImageLink = imageLinks[currentIndex];
      var currentImageSrc = $(currentImageLink).attr('href');
      $('#lightbox .modal-body img').attr('src', currentImageSrc);
    }
  
    // Previous button click handler
    $('#lightbox .prev-btn').on('click', function() {
      currentIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
      updateLightboxImage();
    });
  
    // Next button click handler
    $('#lightbox .next-btn').on('click', function() {
      currentIndex = (currentIndex + 1) % imageLinks.length;
      updateLightboxImage();
    });
  
    // Update the lightbox image when it is shown
    $('#lightbox').on('shown.bs.modal', function() {
      updateLightboxImage();
    });
  });