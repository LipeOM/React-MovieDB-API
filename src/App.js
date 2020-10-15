import React, {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  catalagos(searchTerm){

    const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=2049dc36829d4258cf336092eaa627c1&query=" + searchTerm + "&language=pt-BR"

    
    $.ajax({
      url: urlString,
      success: (searchResults) => {

        const results = searchResults.results
        var movieRows = []

        results.forEach((movie) => {
          if(movie.poster_path != null){
            if(movie.overview === ""){
              movie.overview = "Sinopse Indisponivel"
            }
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieRow key= {movie.id} movie={movie}/>
            movieRows.push(movieRow)
          }
        })

        this.setState({rows: movieRows})

      },
      error: (xhr, status, err) => {
        
      }
    })
  }
  
  procurarInput(event){
    this.catalagos(event.target.value)
  }


  render(){
    return (
      <div className="App">
        <div className="barraPesquisa">
          <h1>Projeto MovieDB</h1>
          <input placeholder="Buscar" onChange={this.procurarInput.bind(this)}></input>
          <hr />
        </div>
        <div className="linhas">
          {this.state.rows}
        </div>
      </div>
    );
  }
}

export default App;
