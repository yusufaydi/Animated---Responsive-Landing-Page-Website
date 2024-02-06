function toglleVideo() {
  const trailer = document.querySelector(".trailer");
  const video = document.querySelector("video");
  video.pause();
  trailer.classList.toggle("active");
}

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelectorAll(".content");
  banner.style.background = url("../src/images/${bg}");
  banner.style.backRepeat = "no-repeat";
  banner.style.objectFit = "cover";
  banner.style.objectPosition = "position";
  banner.style.backgroundsize = "cover";
  banner.style.backgroundPosition = "center";
  /*
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active");
    if (contents[i].classList.contains(title)) {
      contents[i].classList.add("active");
    }
  }
  */

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}
