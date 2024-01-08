const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTI3MDJhMzJkMmRjODkyZmY0MWVkNDUyY2FkNzlmNSIsInN1YiI6IjY1OWE2NjgwODc0MWM0MDE0OWNmZThhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YP6AFRBzCxXt71iiMIveA22dxWAIxInrzwPri1QfSqg'
  }
};
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then(response => response.json())
  .then(response => {
    // console.log(response);
    const result = response.results;
    // console.log("result",result);

    result.forEach(movie => {
      // console.log("movie", movie)
      addMovie(movie);
    });
  })
  .catch(err => console.error(err));

function addMovie(movie) {
  const moviesBox = document.getElementById("moviesBox");

  const { title, overview, poster_path, vote_average } = movie;
  // console.log(movie)

  const card = document.createElement("div");
  const poster = document.createElement("img");
  const mvTitle = document.createElement("h2");
  const mvOverview = document.createElement("p");
  const mvVote_average = document.createElement("p");

  card.className = 'card';
  poster.className = 'poster';
  mvTitle.className = 'mvTitle';
  mvOverview.className = 'mvOverview';
  mvVote_average.className = 'vote-mvVote_average';

  poster.src = `https://image.tmdb.org/t/p/w500${poster_path}`;

  mvTitle.textContent = title;
  mvOverview.textContent = overview;
  mvVote_average.textContent = `Vote Average: ${vote_average}`;
  // mvVote_average.textContent = mvVote_average;


  card.appendChild(poster);
  card.appendChild(mvTitle);
  card.appendChild(mvOverview);
  card.appendChild(mvVote_average);
  moviesBox.appendChild(card);

  console.log(card);

  return card;

};

const btn=document.getElementById("btn");
const searchInput =document.getElementById("search").value;
btn=(searchInput)=>{

  // window.location.href=


};
