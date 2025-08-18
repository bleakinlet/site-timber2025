const imageSources = [
  {
    src: "./img/ads/ad1.png",
    alt: "freestuff", 
    href: "https://www.archive.org"
  },
  {
    src: "./img/ads/kleiner.jpg",
    alt: "kleiner",
    href: "https://www.youtube.com/watch?v=M9J6DKJXoKk"
  },
  {
    src: "./img/ads/grenad.png",
    alt: "grenad",
    href: "https://nandogren.neocities.org/"
  },
  {
    src: "./img/ads/FUZZ.jpg",
    alt: "FUZZ",
    href: "../skarNET/console.html"
  },
  {
    src: "./img/ads/games.gif",
    alt: "GAMEZ",
    href: "./works.html"
  },
  {
    src: "./img/ads/music.gif",
    alt: "music",
    href: "./music.html"
  },
  {
    src: "./img/treegif.gif",
    alt: "tree",
    href: "./treezone.html"
  }
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const imgs = document.querySelectorAll('.shuffle');

function win(sources, imageList) {
  shuffle(sources);
  for (let i = 0; i <= imageList.length - 1; i++){
    imageList[i].setAttribute("src", sources[i].src);
    imageList[i].setAttribute("alt", sources[i].alt);
    imageList[i].parentElement.setAttribute("href", sources[i].href);
  }
};

window.addEventListener('load', () => {
    win(imageSources,imgs);
});