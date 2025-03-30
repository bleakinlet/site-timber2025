const body = document.querySelector("body");
const ads = document.querySelectorAll(".shuffle");
const buttons = document.querySelectorAll(".shuffle");

const filterButton = document.getElementById("filter-button");

  let booty = 0;

  filterButton.addEventListener("click", function(filterEffect) {
    if (booty == 0) {
            //change the body
            body.style.filter = "invert(1)";
            ads.forEach(img => {
              img.style.filter = "invert(1)";
            });
            booty = 1;

        } else if (booty == 1) {
          body.style.filter = "hue-rotate(90deg)";
          ads.forEach(img => {
              img.style.filter = "hue-rotate(270deg)";
            });
            booty = 2;

        } else if (booty == 2) {
            body.style.filter = "sepia(100%)";
            ads.forEach(img => {
              img.style.filter = "hue-rotate(0deg)";
            });
            booty = 3;

        } else if (booty == 3) {
            body.style.filter = "grayscale(100%) contrast(200%)";
            booty = 4;

        } else if (booty == 4) {
          body.style.filter = "contrast(200%)";
          booty = 5;

      } else {
          body.style.filter = "none";
          ads.forEach(img => {
              img.style.filter = "none";
            });
          booty = 0;
        }
    });