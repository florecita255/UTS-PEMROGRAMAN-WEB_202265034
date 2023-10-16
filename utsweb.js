// toggle class active
const nanav = document.querySelector(".navbar-nav");
// saat menu di klik
document.querySelector("#ham-menu").onclick = () => {
  nanav.classList.toggle("active");
};

// js home

list1.addEventListener("mouseenter", function () {
  list1.style.backgroundColor = "#b79d9b";
  list1.style.fontFamily = "Handlee";
  list1.style.color = "white";
  list1.style.fontSize = "2.5 rem";
  // js sinopsis film 1
  const movieTitle = document.querySelector("#list1");
  const movieSynopsis = document.querySelector(".movie-synopsis1");
  movieTitle.addEventListener("click", function () {
    if (movieSynopsis.style.display === "none") {
      movieSynopsis.style.display = "block";
    } else {
      movieSynopsis.style.display = "none";
    }
  });
});
list1.addEventListener("mouseleave", function () {
  list1.style.backgroundColor = "white";
  list1.style.fontFamily = "Montserrat";
  list1.style.color = "#372c2c ";
});
list2.addEventListener("mouseenter", function () {
  list2.style.backgroundColor = "#b79d9b";
  list2.style.fontFamily = "Handlee";
  list2.style.color = "white";
  list2.style.fontSize = "2.5 rem";
  // js sinopsis film2
  const movieTitle = document.querySelector("#list2");
  const movieSynopsis = document.querySelector(".movie-synopsis2");
  movieTitle.addEventListener("click", function () {
    if (movieSynopsis.style.display === "none") {
      movieSynopsis.style.display = "block";
    } else {
      movieSynopsis.style.display = "none";
    }
  });
});
list2.addEventListener("mouseleave", function () {
  list2.style.backgroundColor = "white";
  list2.style.fontFamily = "Montserrat ";
  list2.style.color = "#372c2c";
});
list3.addEventListener("mouseenter", function () {
  list3.style.backgroundColor = "#b79d9b";
  list3.style.fontFamily = "Handlee";
  list3.style.color = "white";
  list3.style.fontSize = "2.5 rem";
  // js sinopsis film
  const movieTitle = document.querySelector("#list3");
  const movieSynopsis = document.querySelector(".movie-synopsis3");
  movieTitle.addEventListener("click", function () {
    if (movieSynopsis.style.display === "none") {
      movieSynopsis.style.display = "block";
    } else {
      movieSynopsis.style.display = "none";
    }
  });
});
list3.addEventListener("mouseleave", function () {
  list3.style.backgroundColor = "white";
  list3.style.fontFamily = "Montserrat ";
  list3.style.color = "#372c2c";
});
list4.addEventListener("mouseenter", function () {
  list4.style.backgroundColor = "#b79d9b";
  list4.style.fontFamily = "Handlee";
  list4.style.color = "white";
  list4.style.fontSize = "2.5 rem";
  // js sinopsis film
  const movieTitle = document.querySelector("#list4");
  const movieSynopsis = document.querySelector(".movie-synopsis4");
  movieTitle.addEventListener("click", function () {
    if (movieSynopsis.style.display === "none") {
      movieSynopsis.style.display = "block";
    } else {
      movieSynopsis.style.display = "none";
    }
  });
});
list4.addEventListener("mouseleave", function () {
  list4.style.backgroundColor = "white";
  list4.style.fontFamily = "Montserrat ";
  list4.style.color = "#372c2c";
});
list5.addEventListener("mouseenter", function () {
  list5.style.backgroundColor = "#b79d9b";
  list5.style.fontFamily = "Handlee";
  list5.style.color = "white";
  list5.style.fontSize = "2.5 rem";
  // js sinopsis film
  const movieTitle = document.querySelector("#list5");
  const movieSynopsis = document.querySelector(".movie-synopsis5");
  movieTitle.addEventListener("click", function () {
    if (movieSynopsis.style.display === "none") {
      movieSynopsis.style.display = "block";
    } else {
      movieSynopsis.style.display = "none";
    }
  });
});
list5.addEventListener("mouseleave", function () {
  list5.style.backgroundColor = "white";
  list5.style.fontFamily = "Montserrat";
  list5.style.color = "#372c2c";
});

// js dom
const input = document.getElementById("input");
const warna1 = document.getElementById("warna1");
const warna2 = document.getElementById("warna2");
const ubahBackgroundButton = document.getElementById("ubahBackground");

ubahBackgroundButton.addEventListener("click", function () {
  // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
  if (input.value.toLowerCase() === "merah") {
    warna1.classList.add("merah");
  } else {
    warna1.classList.remove("merah");
  }
});
ubahBackgroundButton.addEventListener("click", function () {
  // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
  if (input.value.toLowerCase() === "biru") {
    warna2.classList.add("biru");
  } else {
    warna2.classList.remove("biru");
  }
});

ubahBackgroundButton.addEventListener("click", function () {
  // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
  if (input.value.toLowerCase() === "kuning") {
    warna3.classList.add("kuning");
  } else {
    warna3.classList.remove("kuning");
  }
});

ubahBackgroundButton.addEventListener("click", function () {
  // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
  if (input.value.toLowerCase() === "ungu") {
    warna4.classList.add("ungu");
  } else {
    warna4.classList.remove("ungu");
  }
});
ubahBackgroundButton.addEventListener("click", function () {
  // Periksa apakah teks yang dimasukkan adalah "merah" dan setel latar belakang kolom 1 sesuai kondisi
  if (input.value.toLowerCase() === "pink") {
    warna5.classList.add("pink");
  } else {
    warna5.classList.remove("pink");
  }
});

// js addfooter
function addFooter() {
  var footerContainer = document.getElementById("footer-container");
  var addButton = document.querySelector("button");

  if (footerContainer.style.display === "none") {
    footerContainer.style.display = "block";
    addButton.textContent = "Remove footer";
  } else {
    footerContainer.style.display = "none";
    addButton.textContent = "Add footer";
  }
}

// js addcolor
function addColor() {
  var colorInput = document.getElementById("color-input");
  var color = colorInput.value;

  var colorPalette = document.getElementById("color-palette");
  var colorBox = document.createElement("div");
  colorBox.className = "color-box";
  colorBox.style.backgroundColor = color;
  colorPalette.appendChild(colorBox);

  colorInput.value = "";
}
