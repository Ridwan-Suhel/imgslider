const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
];
let imgIndex = 0;
const imgId = document.getElementById("imgId");
setInterval(() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  imgId.setAttribute("src", images[imgIndex]);
  imgIndex++;
}, 1500);
