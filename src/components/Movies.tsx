import React, { Component } from 'react';

function YellowStar() {
  return <span style={{color: "yellow"}}>&#9733;</span>
}

function BlackStar() {
  return <span style={{color: "black"}}>&#9733;</span>
}

function RatingStar(props: any): any {
  const avgRating = props.avgRating;
  const rating = Math.floor(avgRating/2);
  let ratingComp: any[] = [];
  for(let i=0; i<rating; i++) {
    ratingComp.push(<YellowStar/>);
  }
  for(let i=rating; i<5; i++) {
    ratingComp.push(<BlackStar/>);
  }
  return ratingComp;
}

type MovieFetchState = {
  isLoaded: boolean,
  movies: any[]
}

class Movies extends Component<{}, MovieFetchState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false,
      movies: []
    }
  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=6be75f67395913eaf1a30277bde07319")
      .then(res => res.json())
      .then((result: any) => {
        this.setState({
          isLoaded: true,
          movies: result.results
        });
      })
      .catch()
  }

  render() {
    const {isLoaded, movies} = this.state;
    if(!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <h1>{movie.title} ({movie.release_date.split('-')[0]}) </h1>
              <img src={"http://image.tmdb.org/t/p/w185/" + movie.backdrop_path}></img>
              <div><RatingStar avgRating={movie.vote_average} /> {movie.vote_average}/10</div>
              <h3>overview: </h3>
              <p>{movie.overview}</p>
            </li>
          ))}
        </ul>
      )
    }
  }
}

export default Movies;