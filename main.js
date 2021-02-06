// Dark Theme only
const toggle = document.getElementById("toggle");

const enable = () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", "enable");

  toggle.setAttribute("checked", "checked");
}
const disable = () => {
  document.body.classList.remove("dark");
  localStorage.removeItem("theme");
}

if (localStorage.getItem("theme") === "enable") {
  enable();
}

toggle.addEventListener('change', () => {
  const themeColor = localStorage.getItem("theme");
  if (themeColor !== "enable") {
    enable()
  } else {
    disable();
  }
})

//Multi color theme
const darkTheme = document.getElementById("darkToggle");
const blueTheme = document.getElementById("blueToggle");
const lightTheme = document.getElementById("lightToggle");

const allColorTheme = document.querySelectorAll("[data-theme]");

allColorTheme.forEach(element => {
  const color = element.getAttribute("data-theme");
  // console.log(color)
  const toggle = document.getElementById(element.getAttribute("id"));
  element.addEventListener('change', () => {
    if (localStorage.getItem("theme") !== color) {
      enableTheme(color, toggle)
      localStorage.setItem("theme", color);
    } else {
      disableTheme(color);
    }
  })
})

allColorTheme.forEach(colorTheme => {
  if (localStorage.getItem("theme") === colorTheme) {
    document.body.classList.toggle(color);
    localStorage.setItem("theme", color);
    document.getElementById(color.getAttribute("id")).setAttribute("checked", "checked");
  }
})

const enableTheme = (color, toggle) => {
  if (!document.body.hasAttribute("class")) {
    document.body.classList.toggle(color)
    toggle.setAttribute("checked", "checked");
  } else {
    document.body.setAttribute("class", color)
    toggle.setAttribute("checked", "checked");
  }
}

const disableTheme = (color) => {
  document.body.classList.remove(color);
  localStorage.removeItem("theme");
}

switch (localStorage.getItem("theme")) {
  case "dark":
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", "dark");
    darkTheme.setAttribute("checked", "checked");
    break
  case "light":
    document.body.classList.toggle("light");
    localStorage.setItem("theme", "light");
    lightTheme.setAttribute("checked", "checked")
    break;
  case "blue":
    document.body.classList.toggle("blue");
    localStorage.setItem("theme", "blue");
    blueTheme.setAttribute("checked", "checked")
    break;
}

//Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}