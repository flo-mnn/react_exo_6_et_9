import React, {Component} from 'react';
import './SearchBar.css';


class SearchBar extends Component {

    render(){

        return(
            <div className="search">
            <label htmlFor="search">Recherche</label>
            <input type="text" className="text-input"/>
            <input type="submit" className="search-btn"value="Chercher"/>
        </div>
        ); 
    }
};

export default SearchBar;