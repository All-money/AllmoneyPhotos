// List of images inside the 'images/' directory
const imageFilenames = [
    '_MG_1167-1.jpg',
    '_MG_9255-1.jpg',
    '_MG_9270-1.jpg',
    // Add more image filenames here
  ];
  
  const galleryContainer = document.getElementById('gallery');
  
  imageFilenames.forEach((filename) => {
    const img = document.createElement('img');
    img.src = `images/${filename}`;
    img.alt = filename;
    img.loading = 'lazy';
    img.style.border = '1px solid #ccc';
    img.style.padding = '4px';
    galleryContainer.appendChild(img);
  });
  
  