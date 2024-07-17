const handleMenu = () => {
  const navDialog = document.getElementById("nav-dialog");
  navDialog.classList.toggle("hidden");
};

const intitalTraslateLTR = -48 * 4;
const intitalTraslateRTL = 36 * 4;

const setUpIntersectionObserver = (element, isLTR, speed) => {
  const interSectionObserver = new IntersectionObserver((entries) => {
    const isIntersecting = entries[0].isIntersecting;
    if (isIntersecting) {
      document.addEventListener("scroll", scrolHandler);
    } else {
      document.removeEventListener("scroll", scrolHandler);
    }
  });
  interSectionObserver.observe(element);

  const scrolHandler = () => {
    const translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = intitalTraslateLTR + translateX;
    } else {
      totalTranslate = -(intitalTraslateRTL + translateX);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  };
};

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setUpIntersectionObserver(line1, true, 0.15);
setUpIntersectionObserver(line2, false, 0.15);
setUpIntersectionObserver(line3, true, 0.15);
setUpIntersectionObserver(line4, true, 0.8 );
