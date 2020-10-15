import React, {Component} from 'react';
import './App.css';

class MovieRow extends Component {

    render(){
        return (
        <div key={this.props.movie.id} className="linha">
          <div className="poster">
            <img alt="poster" width="120" src={this.props.movie.poster_src}/>
          </div>
          <div className="legenda">
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <p>{this.props.movie.release_date}</p>
          </div>
        </div>
        )
    }
}

export default MovieRow