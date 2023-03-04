const items = document.querySelectorAll(".float-bar .list-group-item");
const sections = document.querySelectorAll(".section");

function highlightNav() {
  let scrollPos = window.scrollY + window.innerHeight * 0.33;

  sections.forEach((section, index) => {
    if (scrollPos >= section.offsetTop) {
      items.forEach((item) => item.classList.remove("active"));
      items[index].classList.add("active");
    }
  });
}

window.addEventListener("scroll", highlightNav);
