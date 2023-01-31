let faqListItem = document.querySelectorAll(".inner-container ul li")

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show")
  })
})