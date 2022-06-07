// Day-Night switcher

if (localStorage.getItem("theme") === "light") {
  setTimeout(function() {
    document.querySelector(".icon-toggle").classList.add("light-theme");
    document.querySelector(".icon-toggle").classList.remove("dark-theme");
  }, 1000);
} else {
  setTimeout(function() {
    document.querySelector(".icon-toggle").classList.add("dark-theme");
    document.querySelector(".icon-toggle").classList.remove("light-theme");
  }, 1000);
}

function addLightClassToHtml() {
  try {
    if (localStorage.getItem("theme") === "light") {
      document.querySelector("html").classList.add("light");
      document.querySelector("html").classList.remove("dark");
      document.querySelector(".icon-toggle").classList.remove("dark-theme");
      document.querySelector(".icon-toggle").classList.add("light-theme");
    } else {
      document.querySelector("html").classList.add("dark");
      document.querySelector("html").classList.remove("light");
      document.querySelector(".icon-toggle").classList.add("dark-theme");
      document.querySelector(".icon-toggle").classList.remove("light-theme");
    }
  } catch (err) {
    console.log(err);
  }
}

document.querySelector(".theme-toggle").addEventListener("click", (event) => {
  event.preventDefault();
  if (localStorage.getItem("theme") === "light") {
    localStorage.removeItem("theme");
  } else {
    localStorage.setItem("theme", "light");
  }
  addLightClassToHtml();
});

addLightClassToHtml();