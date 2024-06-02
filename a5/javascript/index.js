images = [
  {
    src: 'https://cravecookies.com/cdn/shop/files/Black_and_Red_Restaurant_Special_Menu_Chicken_Instagram_Post_1920_x_1080_px_2.png?v=1712321229&width=3840',
    description: '"The Crookie" - Masterfully marrying the buttery, flaky layers of a croissant with the soul-satisfying chocolate chip cookie.'
  },
  {
    src: 'https://cravecookies.com/cdn/shop/files/PB_CUP_62b064c7-a5f7-4682-8e9c-4fbf5ddc7ee0.jpg?v=1714708980&width=3840',
    description: '"Peanut Butter Cup" - A daring dance of a peanut butter dough with crushed Butterfinger and a Reese\'s PB Cup. Each bite is a crunchy, creamy declaration of love for peanut butter and chocolate.'
  },
  {
    src: 'https://cravecookies.com/cdn/shop/files/Black_and_Red_Restaurant_Special_Menu_Chicken_Instagram_Post_1920_x_1080_px_3.png?v=1712321513&width=3840',
    description: '"Mini Cravelits" - 10 x bite sized chocolate chip cookies delivering the full flavor punch of classic Milk Chocolate Chip cookies.'
  },
  {
    src: 'https://cravecookies.com/cdn/shop/files/coconaaa.jpg?v=1717133563&width=2800',
    description: '"Coconut Cream Pie" - A vanilla sugar dough base topped with a layer of the most delicious coconut cream spread you\'ll ever taste.'
  },
  {
    src: 'https://cravecookies.com/cdn/shop/files/cons.jpg?v=1717133699&width=2800',
    description: '"The Crave Cannoli" - Vanilla dough base, packed with mini semi-sweet chocolate chips, is taken with a rich cannoli cream, loaded with even more semi-sweet chips.'
  }
];

let currentIndex = 0;
imageElement = document.getElementById('slideshow-image');
descriptionElement = document.getElementById('image-description');
prevButton = document.getElementById('prev-btn');
nextButton = document.getElementById('next-btn');

function showImage(index) {
  imageElement.src = images[index].src;
  descriptionElement.textContent = images[index].description;
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

let interval = setInterval(showNextImage, 3000);

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(showNextImage, 3000);
}

nextButton.addEventListener('click', () => {
  showNextImage();
  resetInterval();
});

prevButton.addEventListener('click', () => {
  showPrevImage();
  resetInterval();
});

showImage(currentIndex);
