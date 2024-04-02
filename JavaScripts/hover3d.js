// Get all the image elements on the homepage
const images = document.querySelectorAll('.section-main');

// Add a mouseover event listener to each image
images.forEach((image) => {
    image.addEventListener('mouseover', () => {
        // Apply the 3D effect by changing the transform property on hover
        image.style.transform = 'translate(10px, -5px)';
        image.style.transition = 'transform 0.2s ease'; // Add a smooth transition
    });

    // Add a mouseout event listener to reset the transform on mouseout
    image.addEventListener('mouseout', () => {
        image.style.transform = 'none'; // Reset the transform
        image.style.transition = 'transform 0.3s ease'; // Add a smooth transition
    });
});


const video = document.querySelectorAll('#main-video');

// Add a mouseover event listener to each image
video.forEach((image) => {
    image.addEventListener('mouseover', () => {
        // Apply the 3D effect by changing the transform property on hover
        image.style.transform = 'translate(-10px, -10px)';
        image.style.transition = 'transform 0.3s ease'; // Add a smooth transition
    });

    // Add a mouseout event listener to reset the transform on mouseout
    image.addEventListener('mouseout', () => {
        image.style.transform = 'none'; // Reset the transform
        image.style.transition = 'transform 0.3s ease'; // Add a smooth transition
    });
});

const form = document.querySelectorAll('form');

// Add a mouseover event listener to each image
form.forEach((image) => {
    image.addEventListener('mouseover', () => {
        // Apply the 3D effect by changing the transform property on hover
        image.style.transform = 'translate(10px, -10px)';
        image.style.transition = 'transform 0.3s ease'; // Add a smooth transition
    });

    // Add a mouseout event listener to reset the transform on mouseout
    image.addEventListener('mouseout', () => {
        image.style.transform = 'none'; // Reset the transform
        image.style.transition = 'transform 0.3s ease'; // Add a smooth transition
    });
});

