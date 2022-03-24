let nowficture = 1;

setInterval(() => {
  nextSlideShow();
}, 4000);

function nextSlideShow() {
  if (nowficture == 1) {
    $(".slide-show").css("transition", "transform 500ms ease");
    $(".slide-show").css("transform", "translateX(-20%)");
    nowficture = 2;
  } else if (nowficture == 2) {
    $(".slide-show").css("transform", "translateX(-40%)");
    nowficture = 3;
  } else if (nowficture == 3) {
    $(".slide-show").css("transform", "translateX(-60%)");
    nowficture = 4;
  } else if (nowficture == 4) {
    $(".slide-show").css("transform", "translateX(-80%)");
    nowficture = 5;
  } else if (nowficture == 5) {
    $(".slide-show").css("transition", "transform 0ms ease");
    $(".slide-show").css("transform", "translateX(0)");
    nowficture = 1;
  }
}
