const submit = document.getElementById("submit");
let movieName = document.getElementById("movieName");
let movieYear = document.getElementById("movieYear");
let inputURL = document.getElementById("movieURL");
let container = document.getElementById("movies");

let moviesList = [
  //   //everything everywhere all at once
  //   "https://upload.wikimedia.org/wikipedia/pt/0/06/Everything_Everywhere_All_at_Once_2022.jpg",
  //   //megamind
  //   "https://upload.wikimedia.org/wikipedia/pt/0/02/Megamind_Capa.jpg",
  //   //pineapple express
  //   "https://upload.wikimedia.org/wikipedia/pt/c/ca/Pineapple_Express_Poster.jpg",
  //   //about time
  //   "https://upload.wikimedia.org/wikipedia/pt/3/3a/About_Time.jpg",
  //   //hercules
  //   "https://upload.wikimedia.org/wikipedia/pt/7/76/Hercules_%28Disney%29.jpg",
  //   //deathproof
  //   "https://m.media-amazon.com/images/M/MV5BYTdmZmY3Y2QtNjU5NC00OGUxLTg3MWQtMmE2ODM5Mzg3MzcyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1169_.jpg",
  //   //fight club (o livro é melhor)
  //   "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
  //   //nightmare before christmas
  //   "https://upload.wikimedia.org/wikipedia/en/9/9a/The_nightmare_before_christmas_poster.jpg",
  //   //get out
  //   "https://upload.wikimedia.org/wikipedia/pt/0/02/Get_Out_2017.png",
  //   //addams family values
  //   "https://upload.wikimedia.org/wikipedia/en/e/e9/Addams_family_values.jpg",
];

window.onload = function () {
  moviesList = JSON.parse(localStorage.getItem("moviesList")) || [];
  displayMovies();
};

submit.onclick = addMovie;

function addMovie(event) {
  event.preventDefault();

  let movie = {
    name: movieName.value,
    year: movieYear.value,
    url: inputURL.value,
  };

  if (!moviesList.includes(movieName.value)) {
    moviesList.push(movie);
    localStorage.setItem("moviesList", JSON.stringify(moviesList));
    alert("Movie added successfully!");
  } else {
    alert("This movie already exists in the list.");
  }
  displayMovies();
}

//using "for"
function displayMovies() {
  container.innerHTML = "";
  for (let i = 0; i < moviesList.length; i++) {
    container.innerHTML +=
      '<a href="" title="' +
      moviesList[i].name +
      ", " +
      moviesList[i].year +
      '"><img class="poster" src="' +
      moviesList[i].url +
      '">';
  }

  movieName.value = movieYear.value = inputURL.value = "";
}

////using "while"
// let i = 0;

// while (i < moviesList.length) {
//   document.write(`<img class="poster" src=${moviesList[i]}>`);
//   i++;
// }
